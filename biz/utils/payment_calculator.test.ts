import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Decimal } from '@prisma/client/runtime/library';
import { PaymentCalculator } from '@/utils/payment_calculator';

type Case = {
    label: string;
    seconds: number;
    discount: Decimal;
    breakDuration?: number;
    expected: string;
};

function run(sec: number, discount: Decimal, breakDuration: number = 0) {
    const start = new Date(0);
    const end = new Date(sec * 1000);
    return PaymentCalculator.calculatePayment(start, end, discount, breakDuration);
}

const cases: Case[] = [
    // —— 无折扣 ——
    { label: '2 min',            seconds: 2 * 60,                 discount: new Decimal(1),   expected: '¥0.00'  },
    { label: '17 min',           seconds: 17 * 60,                discount: new Decimal(1),   expected: '¥3.00'  },
    { label: '18 min',           seconds: 18 * 60,                discount: new Decimal(1),   expected: '¥6.00'  },
    { label: '2 h',              seconds: 2  * 3600,              discount: new Decimal(1),   expected: '¥24.00' },
    { label: '8 h 46 m 9 s',     seconds: 8*3600 + 46*60 + 9,     discount: new Decimal(1),   expected: '¥72.00' },
    { label: '13 h',             seconds: 13 * 3600,              discount: new Decimal(1),   expected: '¥84.00' },

    // —— 8 折 ——
    { label: '2 h @ 0.8',        seconds: 2  * 3600,              discount: new Decimal(0.8), expected: '¥19.20' },
    { label: '8h46m9s @ 0.8',    seconds: 8*3600+46*60+9,         discount: new Decimal(0.8), expected: '¥57.60' },
    { label: '13 h @ 0.8',       seconds: 13 * 3600,              discount: new Decimal(0.8), expected: '¥67.20' },

    // —— 0 折 ——
    { label: '13 h @ 0',         seconds: 13 * 3600,              discount: new Decimal(0),   expected: '¥0.00'  },

    // —— 带暂停时长的测试用例 ——
    { label: '2 h with 10 min break',     seconds: 2 * 3600,       breakDuration: 10 * 60,     discount: new Decimal(1),   expected: '¥24.00' },
    { label: '18 min with 2 min break',   seconds: 18 * 60,        breakDuration: 2 * 60,      discount: new Decimal(1),   expected: '¥3.00'  },
    { label: '8h46m9s with 1h break @ 0.8', seconds: 8*3600+46*60+9, breakDuration: 3600,  discount: new Decimal(0.8), expected: '¥57.60' },
    { label: '13 h with 2h break',        seconds: 13 * 3600,      breakDuration: 2 * 3600,    discount: new Decimal(1),   expected: '¥72.00' },
];

for (const c of cases) {
    test(`计费 - ${c.label}`, () => {
        const res = run(c.seconds, c.discount, c.breakDuration || 0);
        assert.equal(PaymentCalculator.formatAmount(res.finalAmount), c.expected);
    });
}

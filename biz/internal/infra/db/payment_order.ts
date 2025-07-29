import {prisma} from "@/internal/infra/db/prisma_cli";
import {Prisma} from "@/generated/prisma";

export type CreatePaymentOrderInput = Prisma.payment_ordersUncheckedCreateInput;

class PaymentOrderRepo {
    /**
     * 创建支付订单
     * 当用户下机时创建支付订单，记录费用信息
     * @param data 支付订单创建数据
     * @returns 创建的支付订单
     */
    async createPaymentOrder(data: CreatePaymentOrderInput) {
        return prisma.payment_orders.create({data});
    }

    /**
     * 根据外部订单号查询支付订单
     * 用于支付回调时查找对应的订单
     * @param outTradeNo 外部订单号
     * @returns 支付订单或null
     */
    async getPaymentOrderByOutTradeNo(outTradeNo: string) {
        return prisma.payment_orders.findUnique({
            where: { out_trade_no: outTradeNo },
        });
    }

    /**
     * 更新支付订单状态
     * 当收到支付回调时更新订单状态
     * @param id 订单ID
     * @param status 新的订单状态
     * @returns 更新后的支付订单
     */
    async updatePaymentOrderStatus(id: string, status: number) {
        return prisma.payment_orders.update({
            where: { id },
            data: {
                status,
                updated_at: new Date(),
            },
        });
    }
}

export const paymentOrderRepo = new PaymentOrderRepo(); 
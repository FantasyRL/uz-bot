import fs from 'fs';
import path from 'path';
import { logger } from '@/cmd/server';

const STATIC_IMAGE_DIR = path.resolve(__dirname, '../static');
const IMAGE_EXTS = ['.gif', '.jpg', '.jpeg', '.png'];

export function getAllStaticImages(): string[] {
    try {
        return fs.readdirSync(STATIC_IMAGE_DIR)
            .filter(f => IMAGE_EXTS.includes(path.extname(f).toLowerCase()))
            .map(f => path.join(STATIC_IMAGE_DIR, f));
    } catch (e) {
        logger.error('遍历static目录失败: %s', e);
        return [];
    }
}

export function getRandomStaticImageBuffer(): { buffer: Buffer, filename: string } | null {
    const images = getAllStaticImages();
    if (images.length === 0) return null;
    const file = images[Math.floor(Math.random() * images.length)];
    try {
        return { buffer: fs.readFileSync(file), filename: path.basename(file) };
    } catch (e) {
        logger.error('读取图片失败: %s', e);
        return null;
    }
}
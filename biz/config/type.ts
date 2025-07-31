// 与config.yaml对应
import {z} from "zod";

export const DatabaseSchema = z.object({
    host: z.string(),
    port: z.number(),
    database: z.string(),
    user: z.string(),
    password: z.string(),
});

export const NapcatSchema=z.object({
    host: z.string(),
    port: z.number(),
    token: z.string(),
    debug: z.boolean(),
})

export const ServerSchema=z.object({
    port: z.number(),
})

export const SupportGroupSchema = z.array(
    z.record(
        z.string().refine(val => !isNaN(Number(val)), {
            message: "Group ID must be a valid number"
        }),
        z.object({
            break: z.boolean(),
            uno: z.boolean(),
        })
    )
);
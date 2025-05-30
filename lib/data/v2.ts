import { parse_charsheet_v1 } from "@/lib/data/v1"
import z from "zod"

const charsheet_v2_schema = z.object({
    name: z.string(),
    class: z.string(),
    level: z.number(),
})

export type CharsheetV2 = z.infer<typeof charsheet_v2_schema>

export const parse_charsheet_v2 = (charsheet: unknown): CharsheetV2 | null => {
    const result = charsheet_v2_schema.safeParse(charsheet)

    if (result.success) {
        return result.data
    }

    const v1 = parse_charsheet_v1(charsheet)
    if (v1) {
        const v2: CharsheetV2 = {
            ...v1,
            class: "Rogue",
            level: 1,
        }
        return v2
    }

    return null
}
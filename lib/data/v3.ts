import { parse_charsheet_v2 } from "@/lib/data/v2"
import { z } from "zod"

const charsheet_v3_schema = z.object({
    name: z.string(),
    class: z.string(),
    level: z.number(),
    race: z.string(),
    background: z.string(),
    alignment: z.string(),
    experience: z.number(),
})

export type CharsheetV3 = z.infer<typeof charsheet_v3_schema>

export const parse_charsheet_v3 = (charsheet: unknown): CharsheetV3 | null => {
    const result = charsheet_v3_schema.safeParse(charsheet)

    if (result.success) {
        return result.data
    }

    const v2 = parse_charsheet_v2(charsheet)
    if (v2) {
        const v3: CharsheetV3 = {
            ...v2,
            race: "Human",
            background: "Criminal",
            alignment: "Lawful Neutral",
            experience: 0,
        }
        return v3
    }

    return null
}
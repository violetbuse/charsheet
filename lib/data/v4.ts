import { parse_charsheet_v3 } from "@/lib/data/v3"
import { generate_id } from "@/lib/id"
import { z } from "zod"

const charsheet_v4_schema = z.object({
    character_id: z.string(),
    name: z.string(),
    class: z.string(),
    level: z.number(),
    race: z.string(),
    background: z.string(),
    alignment: z.string(),
    experience: z.number(),
})

export type CharsheetV4 = z.infer<typeof charsheet_v4_schema>

export const parse_charsheet_v4 = (charsheet: unknown): CharsheetV4 | null => {
    const result = charsheet_v4_schema.safeParse(charsheet)

    if (result.success) {
        return result.data
    }

    const v3 = parse_charsheet_v3(charsheet)
    if (v3) {
        const v4: CharsheetV4 = {
            ...v3,
            character_id: generate_id(),
        }
        return v4
    }

    return null
}
import { z } from "zod";

const charsheet_v1_schema = z.object({
    name: z.string(),
})

export type CharsheetV1 = z.infer<typeof charsheet_v1_schema>

export const parse_charsheet_v1 = (charsheet: unknown): CharsheetV1 | null => {
    const result = charsheet_v1_schema.safeParse(charsheet)

    if (result.success) {
        return result.data
    }

    return null
}

import { CharsheetV4, parse_charsheet_v4 } from "@/lib/data/v4";

export type Charsheet = CharsheetV4
const parser: (charsheet: unknown) => Charsheet | null = parse_charsheet_v4

export const parse_charsheet = (charsheet: string): Charsheet | null => {
    try {
        const data: unknown = JSON.parse(charsheet)
        const sheet = parser(data)
        if (sheet) {
            return sheet
        }

        return null
    } catch (error) {
        console.error(error)
        return null
    }
}

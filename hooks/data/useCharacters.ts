import { characters } from "@/db/schema"
import { useDb } from "@/hooks/useDb"
import { useLiveQuery } from "drizzle-orm/expo-sqlite"

export const useCharacters = () => {

    const db = useDb()
    const character_list = useLiveQuery(db.select().from(characters))

    return character_list
}
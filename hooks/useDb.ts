import * as schema from "@/db/schema"
import migrations from "@/drizzle/migrations"
import { drizzle } from "drizzle-orm/expo-sqlite"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { openDatabaseSync } from "expo-sqlite"
import { useState } from "react"

export const useDb = () => {
    const [db] = useState(() => {
        const db = openDatabaseSync("charsheet.db", { enableChangeListener: true })
        return drizzle(db, { schema })
    })

    const { success, error } = useMigrations(db, migrations)

    if (error) {
        console.error(error)
        throw error
    }

    return db
}

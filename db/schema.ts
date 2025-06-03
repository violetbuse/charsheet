import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const characters = sqliteTable("character", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    created_at: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const sheet_versions = sqliteTable("sheet_version", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    character_id: integer("character_id").notNull().references(() => characters.id),
    created_at: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const data = sqliteTable("data", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    sheet_version_id: integer("sheet_version_id").notNull().references(() => sheet_versions.id),
    created_at: integer("created_at", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),

    name: text("character_name"),
    class: text("class"),
    level: integer("level"),
    race: text("race"),
    background: text("background"),
    alignment: text("alignment"),
    experience: integer("experience"),
    player_name: text("player_name"),
})

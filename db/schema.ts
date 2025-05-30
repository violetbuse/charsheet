import { relations } from 'drizzle-orm';
import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const characters = sqliteTable('characters', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),

    // Main Info
    class: text('class'),
    level: integer('level'),
    race: text('race'),
    alignment: text('alignment'),
    background: text('background'),
    experience: integer('experience'),

    // Background Info
    personalityTraits: text('personality_traits'),
    ideals: text('ideals'),
    bonds: text('bonds'),
    flaws: text('flaws'),
    features: text('features'),
    traits: text('traits'),

    // Physical Info
    age: integer('age'),
    height: text('height'),
    weight: text('weight'),
    eyes: text('eyes'),
    skin: text('skin'),
    hair: text('hair'),
    gender: text('gender'),

    // RP Info
    characterBackstory: text('character_backstory'),
    treasure: text('treasure'),
    allies: text('allies'),
    organizations: text('organizations'),

    // Main Stats
    strength: integer('strength'),
    dexterity: integer('dexterity'),
    constitution: integer('constitution'),
    intelligence: integer('intelligence'),
    wisdom: integer('wisdom'),
    charisma: integer('charisma'),

    // Main Stat Modifiers
    strengthModifier: integer('strength_modifier'),
    dexterityModifier: integer('dexterity_modifier'),
    constitutionModifier: integer('constitution_modifier'),
    intelligenceModifier: integer('intelligence_modifier'),
    wisdomModifier: integer('wisdom_modifier'),
    charismaModifier: integer('charisma_modifier'),

    // Inspiration
    inspiration: integer('inspiration'),

    // Proficiency Bonus
    proficiencyBonus: integer('proficiency_bonus'),

    // Passive Wisdom
    passiveWisdom: integer('passive_wisdom'),

    // Saving Throws
    strengthSavingThrow: integer('strength_saving_throw'),
    dexteritySavingThrow: integer('dexterity_saving_throw'),
    constitutionSavingThrow: integer('constitution_saving_throw'),
    intelligenceSavingThrow: integer('intelligence_saving_throw'),
    wisdomSavingThrow: integer('wisdom_saving_throw'),
    charismaSavingThrow: integer('charisma_saving_throw'),

    // Skills
    acrobatics: integer('acrobatics'),
    animalHandling: integer('animal_handling'),
    arcana: integer('arcana'),
    athletics: integer('athletics'),
    deception: integer('deception'),
    history: integer('history'),
    insight: integer('insight'),
    intimidation: integer('intimidation'),
    investigation: integer('investigation'),
    medicine: integer('medicine'),
    nature: integer('nature'),
    perception: integer('perception'),
    performance: integer('performance'),
    persuasion: integer('persuasion'),
    religion: integer('religion'),
    sleightOfHand: integer('sleight_of_hand'),
    stealth: integer('stealth'),
    survival: integer('survival'),

    // Combat
    armorClass: integer('armor_class'),
    initiative: integer('initiative'),
    speed: integer('speed'),
    hitPoints: integer('hit_points'),
    hpMax: integer('hp_max'),
    hitDice: text('hit_dice'),
    deathSavesSuccesses: integer('death_saves_successes'),
    deathSavesFailures: integer('death_saves_failures'),

    // Currency
    copperPieces: integer('copper_pieces'),
    silverPieces: integer('silver_pieces'),
    electrumPieces: integer('electrum_pieces'),
    goldPieces: integer('gold_pieces'),
    platinumPieces: integer('platinum_pieces'),

    // Inventory
    inventory: text('inventory'),

});

export const characterRelations = relations(characters, ({ one, many }) => ({
    spellbooks: many(spellbooks),
}));

export const spellbooks = sqliteTable('spellbooks', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
    characterId: integer('character_id').references(() => characters.id),

    // Spellbook Info
    spellcasterClass: text('spellcaster_class'),
    spellcastingAbility: text('spellcasting_ability'),
    spellSaveDC: integer('spell_save_dc'),
    spellAttackBonus: integer('spell_attack_bonus'),
});

export const spellbookRelations = relations(spellbooks, ({ one, many }) => ({
    character: one(characters, {
        fields: [spellbooks.characterId],
        references: [characters.id],
    }),
    spellCategories: many(spellCategories),
}));

export const spellCategories = sqliteTable('spell_categories', {
    spellbookId: integer('spellbook_id').references(() => spellbooks.id),
    spellCategory: text('spell_category', { enum: ['cantrips', 'first_level', 'second_level', 'third_level', 'fourth_level', 'fifth_level', 'sixth_level', 'seventh_level', 'eighth_level', 'ninth_level'] }),
    spellSlotsTotal: integer('spell_slots_total'),
    spellSlotsExpended: integer('spell_slots_expended'),

}, table => [
    primaryKey({ columns: [table.spellbookId, table.spellCategory] })
]);

export const spellCategoryRelations = relations(spellCategories, ({ one, many }) => ({
    spellbook: one(spellbooks, {
        fields: [spellCategories.spellbookId],
        references: [spellbooks.id],
    }),
    spells: many(spells),
}));

export const spells = sqliteTable('spells', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
    spellbookId: integer('spellbook_id').references(() => spellbooks.id),

    // Spell Info
    prepared: integer('prepared', { mode: 'boolean' }),
    name: text('name'),
    description: text('description'),
    atkBonus: integer('atk_bonus'),
    damageType: text('damage_type'),
    castingTime: text('casting_time'),
    range: text('range'),
    duration: text('duration'),
})

export const spellRelations = relations(spells, ({ one }) => ({
    spellCategory: one(spellCategories, {
        fields: [spells.spellbookId],
        references: [spellCategories.spellbookId],
    }),
}))

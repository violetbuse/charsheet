CREATE TABLE `spell_categories` (
	`spellbook_id` integer,
	`spell_category` text,
	`spell_slots_total` integer,
	`spell_slots_expended` integer,
	PRIMARY KEY(`spellbook_id`, `spell_category`),
	FOREIGN KEY (`spellbook_id`) REFERENCES `spellbooks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `spellbooks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`character_id` integer,
	`spellcaster_class` text,
	`spellcasting_ability` text,
	`spell_save_dc` integer,
	`spell_attack_bonus` integer,
	FOREIGN KEY (`character_id`) REFERENCES `characters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `spells` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`spellbook_id` integer,
	`prepared` integer,
	`name` text,
	`description` text,
	`atk_bonus` integer,
	`damage_type` text,
	`casting_time` text,
	`range` text,
	`duration` text,
	FOREIGN KEY (`spellbook_id`) REFERENCES `spellbooks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `characters` ADD `class` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `level` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `race` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `alignment` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `background` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `experience` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `personality_traits` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `ideals` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `bonds` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `flaws` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `features` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `traits` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `age` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `height` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `weight` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `eyes` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `skin` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `hair` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `gender` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `character_backstory` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `treasure` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `allies` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `organizations` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `strength` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `dexterity` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `constitution` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `intelligence` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `wisdom` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `charisma` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `strength_modifier` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `dexterity_modifier` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `constitution_modifier` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `intelligence_modifier` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `wisdom_modifier` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `charisma_modifier` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `inspiration` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `proficiency_bonus` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `passive_wisdom` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `strength_saving_throw` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `dexterity_saving_throw` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `constitution_saving_throw` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `intelligence_saving_throw` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `wisdom_saving_throw` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `charisma_saving_throw` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `acrobatics` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `animal_handling` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `arcana` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `athletics` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `deception` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `history` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `insight` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `intimidation` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `investigation` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `medicine` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `nature` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `perception` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `performance` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `persuasion` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `religion` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `sleight_of_hand` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `stealth` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `survival` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `armor_class` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `initiative` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `speed` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `hit_points` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `hp_max` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `hit_dice` text;--> statement-breakpoint
ALTER TABLE `characters` ADD `death_saves_successes` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `death_saves_failures` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `copper_pieces` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `silver_pieces` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `electrum_pieces` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `gold_pieces` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `platinum_pieces` integer;--> statement-breakpoint
ALTER TABLE `characters` ADD `inventory` text;
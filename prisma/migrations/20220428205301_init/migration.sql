-- CreateTable
CREATE TABLE `Killers` (
    `killer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `_id` TEXT NULL,
    `name` TEXT NULL,
    `name_tag` TEXT NULL,
    `full_name` TEXT NULL,
    `alias` TEXT NULL,
    `gender` TEXT NULL,
    `nationality` TEXT NULL,
    `realm` TEXT NULL,
    `power` TEXT NULL,
    `weapon` TEXT NULL,
    `speed` TEXT NULL,
    `terror_radius` TEXT NULL,
    `height` TEXT NULL,
    `voice_actor` TEXT NULL,
    `difficulty` TEXT NULL,
    `overview` TEXT NULL,
    `lore` TEXT NULL,
    `dlc` TEXT NULL,
    `dlc_id` INTEGER NULL,
    `is_free` TEXT NULL,
    `is_ptb` TEXT NULL,
    `lang` TEXT NULL,
    `icon` JSON NULL,
    `perks` JSON NULL,

    PRIMARY KEY (`killer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Killervote` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `killerId` INTEGER NOT NULL,
    `rating` INTEGER NOT NULL,
    `voted_on` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perks` (
    `perk_id` INTEGER NOT NULL AUTO_INCREMENT,
    `_id` TEXT NULL,
    `role` TEXT NULL,
    `name` TEXT NULL,
    `name_tag` TEXT NULL,
    `perk_name` TEXT NULL,
    `perk_tag` TEXT NULL,
    `description` TEXT NULL,
    `teach_level` INTEGER NULL,
    `is_ptb` TEXT NULL,
    `lang` TEXT NULL,
    `icon` TEXT NULL,

    PRIMARY KEY (`perk_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Survivors` (
    `survivor_id` INTEGER NOT NULL AUTO_INCREMENT,
    `_id` TEXT NULL,
    `name` TEXT NULL,
    `full_name` TEXT NULL,
    `name_tag` TEXT NULL,
    `gender` TEXT NULL,
    `role` TEXT NULL,
    `nationality` TEXT NULL,
    `voice_actor` TEXT NULL,
    `overview` TEXT NULL,
    `lore` TEXT NULL,
    `difficulty` TEXT NULL,
    `dlc` TEXT NULL,
    `dlc_id` INTEGER NULL,
    `is_free` TEXT NULL,
    `is_ptb` TEXT NULL,
    `lang` TEXT NULL,
    `icon` JSON NULL,
    `perks` JSON NULL,

    PRIMARY KEY (`survivor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Killervote` ADD CONSTRAINT `KillerVote_killerId_fkey` FOREIGN KEY (`killerId`) REFERENCES `Killers`(`killer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

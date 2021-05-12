/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[mobile]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE `Application` MODIFY `accessTokenLifetime` INT NOT NULL DEFAULT 5,
    MODIFY `idTokenLifetime` INT NOT NULL DEFAULT 30;

-- AlterTable
ALTER TABLE `User` ADD COLUMN     `mobile` VARCHAR(191),
    MODIFY `email` VARCHAR(191);

-- CreateIndex
CREATE UNIQUE INDEX `User.mobile_unique` ON `User`(`mobile`);

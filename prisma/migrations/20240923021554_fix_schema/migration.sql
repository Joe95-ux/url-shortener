/*
  Warnings:

  - You are about to drop the column `originalUrl` on the `Url` table. All the data in the column will be lost.
  - Added the required column `originUrl` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Url" DROP COLUMN "originalUrl",
ADD COLUMN     "originUrl" TEXT NOT NULL;

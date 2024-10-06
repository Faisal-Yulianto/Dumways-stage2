/*
  Warnings:

  - Added the required column `likeCount` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `replyCount` to the `Reply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "likeCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Reply" ADD COLUMN     "replyCount" INTEGER NOT NULL;

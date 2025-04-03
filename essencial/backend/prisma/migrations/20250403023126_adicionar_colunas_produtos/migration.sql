/*
  Warnings:

  - Added the required column `descricao` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL
);
INSERT INTO "new_produtos" ("id", "nome") SELECT "id", "nome" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

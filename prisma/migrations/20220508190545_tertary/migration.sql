-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "cooking_time" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "savedBy" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Recipe" ("cooking_time", "createdAt", "id", "ingredients", "name", "procedure", "savedBy", "updatedAt") SELECT "cooking_time", "createdAt", "id", "ingredients", "name", "procedure", "savedBy", "updatedAt" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

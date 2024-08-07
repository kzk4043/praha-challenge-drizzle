import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id", { mode: "number" }).primaryKey({
    autoIncrement: true,
  }),
  name: text("name"),
  userId: text("userId"),
  isCompleted: integer("isCompleted", { mode: "boolean" })
    .notNull()
    .default(false),
});

import { db } from "./db/db";
import { todos } from "./db/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

type InsertTodo = InferInsertModel<typeof todos>;
type Todo = InferSelectModel<typeof todos>;

const insertTodo = (todo: InsertTodo) => {
  return db.insert(todos).values(todo).run();
};

async function main() {
  const result = insertTodo({ name: "Learn TypeScript", isCompleted: false });
  console.log("result", result);

  const allTodo: Todo[] = db.select().from(todos).all();
  console.log(allTodo);
}

main();

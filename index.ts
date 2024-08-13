import { db } from "./db/db";
import { todos } from "./db/schema";

async function main() {
  const allTodo = db.select().from(todos).all();
  console.log("allTodo", allTodo);
}

main();

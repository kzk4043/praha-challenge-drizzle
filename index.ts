import { db } from "./db/db";
import { todos } from "./db/schema";

function main() {
  const allTodo = db.select().from(todos).all();
  console.log(allTodo);
}

main();

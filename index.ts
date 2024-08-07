import { db } from "./db/db";
import { todos } from "./db/schema";

function main() {
  // const result = db
  //   .insert(todos)
  //   .values({
  //     name: "Learn Drizzle",
  //     isCompleted: false,
  //   })
  //   .run();
  // console.log("result", result);

  const allTodo = db.select().from(todos).all();
  console.log("allTodo", allTodo);
  const singleTodo = db.select().from(todos).get();
  console.log("singleTodo", singleTodo);
}

main();

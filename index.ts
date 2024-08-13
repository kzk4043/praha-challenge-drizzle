import { db } from "./db/db";
import { todos } from "./db/schema";

async function main() {
  const query = db.select().from(todos).toSQL();
  console.log(query);
}

main();

import { db } from './db/db';
import { todos } from './db/schema';

async function main() {
  const result = db
    .insert(todos)
    .values({ name: 'Learn Drizzle', isCompleted: false })
    .run();
  console.log('result', result);

  const allTodo = db.select().from(todos).all();
  console.log('allTodo', allTodo);
}

main();

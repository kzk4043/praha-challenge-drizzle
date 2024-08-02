import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database("./db/sqlite.db");
export const db: BetterSQLite3Database = drizzle(sqlite);

// マイグレーションファイルを元にデータベースの作成やテーブルの作成/更新を行う
// テーブルの構成を変更した場合など必要な時にのみ実行
migrate(db, { migrationsFolder: "./drizzle" });

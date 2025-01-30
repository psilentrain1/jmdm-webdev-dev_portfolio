import { db } from "./database";

export function migrate() {
  db.prepare(
    `
            CREATE TABLE IF NOT EXISTS posts (
                post_id INTEGER PRIMARY KEY AUTOINCREMENT,
                post_title TEXT NOT NULL,
                post_content TEXT NOT NULL,
                post_date TEXT NOT NULL,
                post_category TEXT NOT NULL,
                post_tags TEXT);

            CREATE TABLE IF NOT EXISTS users (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_name TEXT NOT NULL,
                user_email TEXT NOT NULL,
                user_password TEXT NOT NULL);
            `
  ).run();
}

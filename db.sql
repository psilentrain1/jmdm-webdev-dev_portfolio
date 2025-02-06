PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE posts (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_slug TEXT NOT NULL,
    post_title TEXT NOT NULL,
    post_content TEXT NOT NULL,
    post_date TEXT NOT NULL,
    post_category TEXT NOT NULL,
    post_tags TEXT,
    post_status TEXT NOT NULL);

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL);
INSERT INTO sqlite_sequence VALUES('posts',20);
COMMIT;

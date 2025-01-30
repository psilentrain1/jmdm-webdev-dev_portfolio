import sqlite from "better-sqlite3";
import path from "path";

export const db = new sqlite(path.join(process.cwd(), "folio.db"), {
  fileMustExist: true,
});

export function dbQuery(sql: string) {
  return db.prepare(sql).all();
}

export function dbRun(sql: string) {
  return db.prepare(sql).run();
}

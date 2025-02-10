import { dbQuery } from "../database";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "categories" });

// Get all categories
export function GET() {
  const categories = `SELECT post_category, COUNT(post_category) AS 'count' FROM posts GROUP BY post_category ORDER BY count DESC`;

  let status, body;
  try {
    log.trace("Fetching categories");
    const data = dbQuery(categories);
    body = data;
    status = 200;
    log.trace("Fetched categories");
    return Response.json(body, { status });
  } catch (error) {
    log.error(error, "Error fetching categories");
    return Response.json({ error: error }, { status: 400 });
  }
}

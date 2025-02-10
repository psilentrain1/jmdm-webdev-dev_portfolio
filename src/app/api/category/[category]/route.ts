import { dbQuery } from "../../database";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "category" });

// Get all posts by category
export async function GET(req: Request, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = `SELECT * FROM posts WHERE post_category LIKE '${category}' AND post_status = 'published' ORDER BY post_date DESC`;

  let status, body;
  try {
    log.trace("Fetching posts by category");
    const data = dbQuery(posts);
    body = data;
    status = 200;
    log.trace("Fetched posts by category");
    return Response.json(body, { status });
  } catch (error) {
    log.error(error, "Error fetching posts by category");
    return Response.json({ error: error }, { status: 400 });
  }
}

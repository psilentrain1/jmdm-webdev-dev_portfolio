import { dbQuery } from "../../database";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "tag" });

// Get all posts by tag
export async function GET(req: Request, { params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = `SELECT * FROM posts WHERE post_tags LIKE '%${tag}%' AND post_status = 'published' ORDER BY post_date DESC`;

  let status, body;
  try {
    log.trace("Fetching posts by tag");
    const data = dbQuery(posts);
    body = data;
    status = 200;
    log.trace("Fetched posts by tag");
    return Response.json(body, { status });
  } catch (error) {
    log.error(error, "Error fetching posts by tag");
    return Response.json({ error: error }, { status: 400 });
  }
}

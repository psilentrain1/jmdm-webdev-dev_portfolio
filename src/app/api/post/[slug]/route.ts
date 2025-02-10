import { dbQuery } from "../../database";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "post" });

// Get one post
export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = `SELECT * FROM posts WHERE post_slug = '${slug}'`;

  let status, body;
  try {
    log.trace("Fetching post");
    const data = dbQuery(post);
    body = data;
    status = 200;
    log.trace("Fetched post");
    return Response.json(body, { status });
  } catch (error) {
    log.error(error, "Error fetching post");
    return Response.json({ error: error }, { status: 400 });
  }
}

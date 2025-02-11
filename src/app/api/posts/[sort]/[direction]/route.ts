import { dbQuery, dbRun } from "../../../database";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "posts" });

// Get all posts
export async function GET(req: Request, { params }: { params: Promise<{ sort: string; direction: string }> }) {
  const { sort, direction } = await params;

  const posts = `SELECT * FROM posts WHERE post_status = 'published' ORDER BY ${sort} ${direction}`;

  let status, body;
  try {
    log.trace("Fetching all posts");
    const data = dbQuery(posts);
    body = data;
    status = 200;
    log.trace("Fetched all posts");
    return Response.json(body, { status });
  } catch (error) {
    log.error(error, "Error fetching all posts");
    return Response.json({ error: error }, { status: 400 });
  }
}

// Create post
// TODO: add status and excerpt
export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, date, category, tags } = body;
  const slug = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  const query = `INSERT INTO posts (post_slug, post_title, post_content, post_date, post_category, post_tags) VALUES (${slug}, ${title}, ${content}, ${date}, ${category}, ${tags})`;

  try {
    log.trace("Creating post");
    dbRun(query);
    // Do I need to return anything here?
    log.trace("Created post");
  } catch (error) {
    log.error(error, "Error creating post");
    return Response.json({ error: error }, { status: 400 });
  }
}

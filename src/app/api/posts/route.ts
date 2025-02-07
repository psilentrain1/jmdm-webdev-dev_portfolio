import { dbQuery, dbRun } from "../database";

// Get all posts
export function GET() {
  const posts = `SELECT * FROM posts WHERE post_status = 'published' ORDER BY post_date DESC`;

  let status, body;
  try {
    const data = dbQuery(posts);
    body = data;
    status = 200;
    return Response.json(body, { status });
  } catch (error) {
    console.error(error);
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
    dbRun(query);
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 400 });
  }
}

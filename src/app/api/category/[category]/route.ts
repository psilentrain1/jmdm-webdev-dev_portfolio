import { dbQuery } from "../../database";

// Get all posts by category
export async function GET(req: Request, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = `SELECT * FROM posts WHERE post_category LIKE '${category}' AND post_status = 'published' ORDER BY post_date DESC`;

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

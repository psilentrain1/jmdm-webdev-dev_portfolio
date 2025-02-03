import { dbQuery } from "../../database";

// Get all posts by tag
export async function GET(req: Request, { params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = `SELECT * FROM posts WHERE post_tags LIKE '%${tag}%'`;

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

import { dbQuery } from "../../database";

// Get one post
export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = `SELECT * FROM posts WHERE post_slug = '${slug}'`;

  let status, body;
  try {
    const data = dbQuery(post);
    body = data;
    status = 200;
    return Response.json(body, { status });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 400 });
  }
}

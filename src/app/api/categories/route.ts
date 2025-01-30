import { dbQuery } from "../database";

// Get all categories
export function GET() {
  const categories = `SELECT post_category FROM posts GROUP BY post_category`;

  let status, body;
  try {
    const data = dbQuery(categories);
    body = data;
    status = 200;
    return Response.json(body, { status });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 400 });
  }
}

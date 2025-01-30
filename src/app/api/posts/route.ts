import { dbQuery, dbRun } from "../database";

// Get all posts
export async function GET(req: Request, res: Response) {
  const query = `SELECT * FROM posts`;

  let status, body;
  try {
    await dbQuery(query)
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err: Error) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, { status });
  } catch (error) {
    console.error(error.message);
    return Response.json({ error: error }, { status: 400 });
  }
}

// Create post

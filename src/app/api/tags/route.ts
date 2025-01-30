import { dbQuery } from "../database";

// Get all tags
export function GET() {
  const tags = `SELECT post_tags FROM posts`;

  let status, body;
  try {
    const data = dbQuery(tags);
    body = data as { post_tags: string }[];
    status = 200;

    // processing tags into a deduplicated list
    let bigList: string[] = [];
    for (let i = 0; i < body.length; i++) {
      let tags: string[] = (body[i] as { post_tags: string }).post_tags.split(",");
      tags = tags.map((tag) => tag.trim());
      bigList = bigList.concat(tags);
    }
    const dedupe = new Set(bigList);
    const tagList = [...dedupe];

    return Response.json(tagList, { status });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 400 });
  }
}

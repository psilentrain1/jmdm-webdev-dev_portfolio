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
    /* let bigList: string[] = [];
    for (let i = 0; i < body.length; i++) {
      let tags: string[] = (body[i] as { post_tags: string }).post_tags.split(",");
      tags = tags.map((tag) => tag.trim());
      bigList = bigList.concat(tags);
    }
    const dedupe = new Set(bigList);
    const tagList = [...dedupe]; */

    const tagCountMap = new Map<string, number>();
    for (let i = 0; i < body.length; i++) {
      let tags: string[] = (body[i] as { post_tags: string }).post_tags.split(",");
      tags = tags.map((tag) => tag.trim());
      tags.forEach((tag) => {
        tagCountMap.set(tag, (tagCountMap.get(tag) || 0) + 1);
      });
    }

    const tagObj = Object.fromEntries(tagCountMap);

    return Response.json(tagObj, { status });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error }, { status: 400 });
  }
}

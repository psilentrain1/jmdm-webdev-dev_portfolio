import { dbQuery } from "../database";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "tags" });

// Get all tags
export function GET() {
  const tags = `SELECT post_tags FROM posts WHERE post_status = 'published'`;

  let status, body;
  try {
    log.trace("Fetching all tags");
    const data = dbQuery(tags);
    body = data as { post_tags: string }[];
    status = 200;

    // processing tags into a deduplicated list
    const tagCountMap = new Map<string, number>();
    for (let i = 0; i < body.length; i++) {
      let tags: string[] = (body[i] as { post_tags: string }).post_tags.split(",");
      tags = tags.map((tag) => tag.trim());
      tags.forEach((tag) => {
        tagCountMap.set(tag, (tagCountMap.get(tag) || 0) + 1);
      });
    }

    const tagObj = Object.fromEntries(tagCountMap);

    log.trace("Fetched all tags");
    return Response.json(tagObj, { status });
  } catch (error) {
    log.error(error, "Error fetching all tags");
    return Response.json({ error: error }, { status: 400 });
  }
}

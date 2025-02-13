import { dbQuery, dbRun } from "../../database";
import { logger } from "@/app/utilities/logger";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const log = logger.child({ module: "posts" });

// Get all posts
export async function GET(req: Request, { params }: { params: Promise<{ options: string[] }> }) {
  const opts = await params;

  const published = opts.options[0];
  const sort = opts.options[1];
  const direction = opts.options[2];

  let pubString;
  if (published === "all") {
    pubString = "";
  } else {
    pubString = `WHERE post_status = '${published}'`;
  }

  const posts = `SELECT * FROM posts ${pubString} ORDER BY ${sort} ${direction}`;

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
export async function POST(req: Request, { params }: { params: Promise<{ options: string[] }> }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    log.info("Unauthorized request to create post");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const opts = await params;

  body.post_title = body.post_title.replace(/'/g, "''");
  body.post_content = body.post_content.replace(/'/g, "''");

  let query;
  if (opts.options[0] === "new") {
    query = `INSERT INTO posts (post_slug, post_title, post_content, post_excerpt, post_date, post_category, post_tags, post_status) VALUES ('${body.post_slug}', '${body.post_title}', '${body.post_content}', '${body.post_excerpt}', '${body.post_date}', '${body.post_category}', '${body.post_tags}', '${body.post_status}')`;
  } else {
    query = `UPDATE posts SET post_title = '${body.post_title}', post_content = '${body.post_content}', post_excerpt = '${body.post_excerpt}', post_date = '${body.post_date}', post_category = '${body.post_category}', post_tags = '${body.post_tags}', post_status = '${body.post_status}' WHERE post_id = ${body.post_id}`;
  }

  try {
    log.trace("Creating post");
    const run = dbRun(query);

    if (run.changes > 0) {
      log.trace("Created post");
      return Response.json({ message: "Post saved" }, { status: 200 });
    } else {
      log.error("Post not saved with query: " + query);
      return Response.json({ message: "Post not saved" }, { status: 500 });
    }
  } catch (error) {
    log.error(error, "Error creating post");
    return Response.json({ error: error }, { status: 400 });
  }
}

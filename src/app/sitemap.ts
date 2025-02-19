import { Post } from "@/types/app.types";
import { MetadataRoute } from "next";

const API_URL = "https://jamesdraketech.com/api/posts/published/post_date/DESC";
const POSTS_URL = "https://jamesdraketech.com/posts";

function convertDate(date: string) {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(4, 6)) - 1;
  const day = parseInt(date.substring(6, 8));

  return new Date(year, month, day);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: "https://jamesdraketech.com",
      lastModified: new Date(),
    },
  ];

  const request = await fetch(API_URL);
  const posts: Post[] = await request.json();

  posts.map(({ post_slug, post_date }) => {
    links.push({
      url: `${POSTS_URL}/${post_slug}`,
      lastModified: convertDate(post_date),
    });
  });

  return links;
}

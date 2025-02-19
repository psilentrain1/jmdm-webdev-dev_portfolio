"use server";

export default async function getPostMeta(slug: string) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/post/${slug}`);
  const data = await response.json();
  return [data[0].post_title, data[0].post_excerpt];
}

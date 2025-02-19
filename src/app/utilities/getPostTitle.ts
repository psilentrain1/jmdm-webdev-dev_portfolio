"use server";

export default async function getPostTitle(slug: string) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/post/${slug}`);
  const data = await response.json();
  return data[0].post_title;
}

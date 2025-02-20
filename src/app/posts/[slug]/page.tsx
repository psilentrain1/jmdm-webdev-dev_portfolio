import getPostMeta from "@/app/utilities/getPostMeta";
import Post from "./Post";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const pageParams = await params;
  const [postTitle, postExcerpt, postTags] = await getPostMeta(pageParams.slug);

  return {
    title: `${postTitle}`,
    description: postExcerpt,
    keywords: postTags,
  };
}

export default function SinglePost() {
  return <Post />;
}

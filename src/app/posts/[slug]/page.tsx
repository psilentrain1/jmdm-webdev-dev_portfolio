import getPostMeta from "@/app/utilities/getPostMeta";
import Post from "./Post";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const pageParams = await params;
  const [postTitle, postExcerpt] = await getPostMeta(pageParams.slug);

  return {
    title: `${postTitle} - James Drake`,
    description: postExcerpt,
  };
}

export default function SinglePost() {
  return <Post />;
}

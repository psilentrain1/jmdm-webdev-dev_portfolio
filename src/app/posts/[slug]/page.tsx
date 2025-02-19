import getPostTitle from "@/app/utilities/getPostTitle";
import Post from "./Post";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const pageParams = await params;
  const postTitle = await getPostTitle(pageParams.slug);

  return {
    title: `${postTitle} - James Drake`,
  };
}

export default function SinglePost() {
  return <Post />;
}

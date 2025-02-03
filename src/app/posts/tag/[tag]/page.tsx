"use client";
import { useParams } from "next/navigation";
import useGetPostList from "@/hooks/useGetPosts";

export default function PostsByTag() {
  const params = useParams<{ tag: string }>();
  const { posts, postLoading } = useGetPostList({ group: "tag", option: params.tag });

  return (
    <>
      <h2>
        Tag: <span id="tagName">{decodeURI(params.tag)}</span>
      </h2>
      {postLoading ? <span>Loading...</span> : posts}
    </>
  );
}

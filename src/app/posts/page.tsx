"use client";
import useGetPostList from "@/hooks/useGetPosts";

export default function Posts() {
  const { posts, postLoading } = useGetPostList({ group: "all", option: "" });

  return (
    <>
      <h2>Recent Posts</h2>
      {postLoading ? <span>Loading...</span> : posts}
    </>
  );
}

"use client";
import useGetPostList from "@/hooks/useGetPosts";
import { useParams } from "next/navigation";

export default function Category() {
  const params = useParams<{ category: string }>();
  const { posts, postLoading } = useGetPostList({ group: "category", option: params.category });

  return (
    <>
      <h2>
        Category: <span id="categoryName">{params.category}</span>
      </h2>
      {postLoading ? <span>Loading...</span> : posts}
    </>
  );
}

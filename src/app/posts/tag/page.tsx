"use client";
import useGetTags from "@/hooks/useGetTags";
import styles from "../page.module.css";

export default function Tags() {
  const { tags, tagsLoading } = useGetTags();

  return (
    <>
      <h2>Tags</h2>
      {tagsLoading ? <div>Loading...</div> : tags}
    </>
  );
}

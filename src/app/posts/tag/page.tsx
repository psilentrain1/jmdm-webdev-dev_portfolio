"use client";
import useGetTags from "@/hooks/useGetTags";
import styles from "../page.module.css";

export default function Tags() {
  const { tags, tagsLoading } = useGetTags("page");

  return (
    <>
      <h2>Tags</h2>
      <ul className={styles.posts__taglist}>{tagsLoading ? <div>Loading...</div> : tags}</ul>
    </>
  );
}

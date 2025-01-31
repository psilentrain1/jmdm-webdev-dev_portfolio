"use client";
import { useGetPost } from "@/hooks/useGetPosts";
import { useParams } from "next/navigation";
import styles from "../page.module.css";

export default function SinglePost() {
  const params = useParams<{ slug: string }>();
  const { post, postLoading } = useGetPost({ group: "single", option: params.slug });

  console.log(post);
  console.log(postLoading);

  if (postLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>{post.post_title}</h2>
      <div className={styles.post__date}>Posted: {post.post_date}</div>
      <div className={styles.post__content}>{post.post_content}</div>
      <div className={styles.post__category}>Category: {post.post_category}</div>
      <div className={styles.post__tags}>Tags: {post.post_tags}</div>
    </>
  );
}

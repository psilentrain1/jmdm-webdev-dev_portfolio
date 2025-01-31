"use client";
import { useGetPost } from "@/hooks/useGetPosts";
import { useParams } from "next/navigation";
import styles from "../page.module.css";
import Link from "next/link";

export default function SinglePost() {
  const params = useParams<{ slug: string }>();
  const { post, postLoading } = useGetPost({ group: "single", option: params.slug });

  //   const tags = post?.post_tags.map((tag)=> )
  //   console.log(post.post_tags);

  if (postLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>{post?.post_title}</h2>
      <div className={styles.post__date}>Posted: {post?.post_date}</div>
      <div className={styles.post__content}>{post?.post_content}</div>
      <div className={styles.post__category}>
        Category: <Link href={`/posts/category/${post?.post_category}`}>{post?.post_category}</Link>
      </div>
      <div className={styles.post__tags}>
        Tags:{" "}
        {post?.post_tags.map((tag) => (
          <Link className={styles.post__tags__tag} key={tag} href={`/posts/tag/${tag}`}>
            {tag}
          </Link>
        ))}
      </div>
      {/* <div>{post.post_tags}</div> */}
    </>
  );
}

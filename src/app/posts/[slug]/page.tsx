"use client";
import { useGetPost } from "@/hooks/useGetPosts";
import { useParams } from "next/navigation";
import styles from "../page.module.css";
import Link from "next/link";
import showdown from "showdown";
import hljs from "highlight.js";
import python from "highlight.js/lib/languages/python";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";
hljs.registerLanguage("python", python);
hljs.registerLanguage("javascript", javascript);

export default function SinglePost() {
  const params = useParams<{ slug: string }>();
  const { post, postLoading } = useGetPost({ group: "single", option: params.slug });

  useEffect(() => {
    hljs.highlightAll();
  }, [postLoading]);

  const converter = new showdown.Converter({
    customizedHeaderId: true,
    disableForced4SpacesIndentedSublists: true,
    tables: true,
  });

  function renderMarkdown() {
    const renderedHTML = converter.makeHtml(post?.post_content || "");
    hljs.highlightAll();
    return { __html: renderedHTML };
  }

  const postContent = renderMarkdown();

  if (postLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>{post?.post_title}</h2>
      <div className={styles.post__date}>Posted: {post?.post_date}</div>
      <div id={"postContent"} className={styles.post__content} dangerouslySetInnerHTML={postContent}></div>
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
    </>
  );
}

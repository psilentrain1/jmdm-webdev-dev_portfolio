"use client";
import { useGetPost } from "@/hooks/useGetPosts";
import { Post } from "@/types/app.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/office/page.module.css";

export default function EditPost() {
  const [postState, setPostState] = useState<Post>({
    post_id: 0,
    post_slug: "",
    post_title: "",
    post_content: "",
    post_date: "",
    post_category: "",
    post_tags: [],
    post_excerpt: "",
    post_status: "",
  });
  const params = useParams<{ slug: string }>();
  const { post, postLoading } = useGetPost({ group: "single", option: params.slug });

  useEffect(() => {
    if (!postLoading && post) {
      setPostState(post);
    }
  }, [postLoading, post]);

  if (postLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <form className={styles.post__form}>
        <label htmlFor="post_title">Title:</label>
        <input
          id="post_title"
          name="post_title"
          type="text"
          value={postState.post_title}
          onChange={(e) => setPostState({ ...postState, post_title: e.target.value })}
        />
        <br />
        <label htmlFor="post__date">Post Date:</label>
        <input
          type="date"
          name="post_date"
          id="post_date"
          value={postState.post_date.slice(0, 4) + "-" + postState.post_date.slice(4, 6) + "-" + postState.post_date.slice(6, 8)}
          onChange={(e) => setPostState({ ...postState, post_date: e.target.value })}
        />
        <br />
        <label htmlFor="post_status">Status:</label>
        <select
          name="post_status"
          id="post_status"
          value={postState.post_status}
          onChange={(e) => setPostState({ ...postState, post_status: e.target.value })}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <br />
        <label htmlFor="post_content">Content:</label>
        <textarea
          id="post_content"
          value={postState.post_content}
          onChange={(e) => setPostState({ ...postState, post_content: e.target.value })}
        />
        <br />
        <label htmlFor="post_category">Category:</label>
        <input
          id="post_category"
          value={postState.post_category}
          onChange={(e) => setPostState({ ...postState, post_category: e.target.value })}
        />
        <br />
        <label htmlFor="post_tags">Tags:</label>
        {/* FIXME: Fix this state change */}
        <input
          id="post_tags"
          value={postState.post_tags}
          onChange={(e) => setPostState({ ...postState, post_tags: new Array(e.target.value) })}
        />
        <br />
        <label htmlFor="post_slug">Slug:</label>
        <input id="post_slug" value={postState.post_slug} onChange={(e) => setPostState({ ...postState, post_slug: e.target.value })} />
        <br />
        <label htmlFor="post_excerpt">Excerpt:</label>
        <input
          id="post_excerpt"
          value={postState.post_excerpt}
          onChange={(e) => setPostState({ ...postState, post_excerpt: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

"use client";
import { useGetPost } from "@/hooks/useGetPosts";
import { Post } from "@/types/app.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/app/office/page.module.css";
import { useSavePost } from "@/hooks/useSavePost";

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
  const savePost = useSavePost(params.slug, postState);

  const characterCount = document.getElementById("CharacterCount");
  const postExcerpt = document.getElementById("post_excerpt") as HTMLInputElement;

  function generateSlug() {
    const slug = postState.post_title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
    setPostState({ ...postState, post_slug: slug });
  }

  useEffect(() => {
    if (params.slug != "new" && !postLoading && post) {
      setPostState(post);
    }
  }, [postLoading, post, params.slug]);

  useEffect(() => {
    if (characterCount && postExcerpt) {
      characterCount.innerHTML = postExcerpt.value.length.toString();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postState]);

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
          onChange={(e) => setPostState({ ...postState, post_date: e.target.value.replace(/-/g, "") })}
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
        <input
          id="post_tags"
          value={postState.post_tags.join(", ")}
          onChange={(e) => setPostState({ ...postState, post_tags: e.target.value.split(", ") })}
        />
        <br />
        <label htmlFor="post__slug">Slug:</label>
        <div className={styles.post__slug}>
          <input id="post_slug" value={postState.post_slug} onChange={(e) => setPostState({ ...postState, post_slug: e.target.value })} />
          <button type="button" onClick={generateSlug}>
            Generate
          </button>
        </div>

        <br />
        <label htmlFor="post_excerpt">
          Excerpt: | Characters: <span id="CharacterCount"></span>/150
        </label>
        <input
          id="post_excerpt"
          value={postState.post_excerpt}
          onChange={(e) => setPostState({ ...postState, post_excerpt: e.target.value })}
        />
        <br />
        <button
          type="button"
          onClick={() => {
            const confirmPost = window.confirm("Save to database?");
            if (confirmPost) {
              savePost();
            }
          }}>
          Submit
        </button>
      </form>
    </>
  );
}

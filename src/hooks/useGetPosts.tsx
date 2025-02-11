import { JSX, useEffect, useState } from "react";
import styles from "../app/posts/page.module.css";
import officeStyles from "../app/office/page.module.css";
import Link from "next/link";
import { logger } from "@/app/utilities/logger";
import { FaTrash } from "react-icons/fa";

const log = logger.child({ module: "useGetPosts" });

interface postSet {
  group: string;
  option: string;
}

interface Post {
  post_id: number;
  post_slug: string;
  post_title: string;
  post_content: string;
  post_date: string;
  post_category: string;
  post_tags: string[];
}

export default function useGetPostList(postSet: postSet) {
  const [posts, setPosts] = useState<JSX.Element[]>([]);
  const [postLoading, setPostLoading] = useState(true);

  let apiCall: string;
  if (postSet.group === "all") {
    apiCall = `/api/posts/published/post_date/DESC`;
  } else if (postSet.group === "category") {
    apiCall = `/api/category/${postSet.option}`;
  } else if (postSet.group === "tag") {
    apiCall = `/api/tag/${postSet.option}`;
  } else {
    apiCall = "/api";
  }

  async function getPosts() {
    const postList: JSX.Element[] = [];
    try {
      log.trace("Fetching posts");
      await fetch(apiCall)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            postList.push(
              <article key={i} className={styles.postlist}>
                <div className={styles.postlist__date}>{data[i].post_date}</div>
                <div className={styles.postlist__title}>
                  <Link href={`/posts/${data[i].post_slug}`}>{data[i].post_title}</Link>
                </div>
                <div className={styles.postlist__excerpt}>{data[i].post_excerpt}</div>
                <div className={styles.postlist__category}>{data[i].post_category}</div>
              </article>
            );
          }
          setPosts(postList);
        });
      log.trace("Fetched posts");
    } catch (error) {
      log.error(error, "Error fetching posts");
    } finally {
      setPostLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, postLoading };
}

export function useGetPost(postSet: postSet) {
  const [post, setPost] = useState<Post>();
  const [postLoading, setPostLoading] = useState(true);

  let apiCall: string;
  if (postSet.group === "all") {
    apiCall = "/api";
  } else if (postSet.group === "category") {
    apiCall = `/api`;
  } else if (postSet.group === "tag") {
    apiCall = `/api`;
  } else if (postSet.group === "single") {
    apiCall = `/api/post/${postSet.option}`;
  } else {
    apiCall = "/api";
  }

  async function getPost() {
    try {
      log.trace("Fetching post");
      await fetch(apiCall)
        .then((res) => res.json())
        .then((data) => {
          const tags = data[0].post_tags.split(", ");

          setPost({
            post_id: data[0].post_id,
            post_slug: data[0].post_slug,
            post_title: data[0].post_title,
            post_content: data[0].post_content,
            post_date: data[0].post_date,
            post_category: data[0].post_category,
            post_tags: tags,
          });
        });
      log.trace("Fetched post");
    } catch (error) {
      log.error(error, "Error fetching post");
    } finally {
      setPostLoading(false);
    }
  }

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { post, postLoading };
}

export function useGetPostsOffice({ published = "all", sort = "post_date", direction = "DESC" }) {
  const [posts, setPosts] = useState<JSX.Element[]>([]);
  const [postLoading, setPostLoading] = useState(true);

  const apiCall = `/api/posts/${published}/${sort}/${direction}`;

  async function getPosts() {
    const postList: JSX.Element[] = [];
    try {
      log.trace("Fetching posts");
      await fetch(apiCall)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            postList.push(
              <article key={i} className={officeStyles.post__listitem}>
                <div className={officeStyles.post__listitem__title}>
                  <Link href={`/office/posts/${data[i].post_slug}`}>{data[i].post_title}</Link>
                </div>
                <div className={officeStyles.post__listitem__date}>{data[i].post_date}</div>
                <div className={officeStyles.post__listitem__category}>{data[i].post_category}</div>
                <div className={officeStyles.post__listitem__status}>{data[i].post_status}</div>
                <div className={officeStyles.post__listitem__delete}>
                  <FaTrash />
                </div>
              </article>
            );
          }
          setPosts(postList);
        });
      log.trace("Fetched posts");
    } catch (error) {
      log.error(error, "Error fetching posts");
    } finally {
      setPostLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, postLoading };
}

import Link from "next/link";
import { JSX, useEffect, useState } from "react";

export default function useGetTags() {
  const [tags, setTags] = useState<JSX.Element[]>([]);
  const [tagsLoading, setTagsLoading] = useState(true);

  async function getTags() {
    const tagList: JSX.Element[] = [];
    try {
      await fetch("/api/tags")
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            tagList.push(
              <Link key={i} href={`/posts/tag/${data[i]}`}>
                {data[i]}
              </Link>
            );
            tagList.push(<span>,&nbsp;</span>);
          }
          setTags(tagList);
        });
    } catch (error) {
      console.error("Error", error);
    } finally {
      setTagsLoading(false);
    }
  }

  useEffect(() => {
    getTags();
  }, []);

  return { tags, tagsLoading };
}

export function useGetTagsShort() {
  const [tags, setTags] = useState<JSX.Element[]>([]);
  const [tagsLoading, setTagsLoading] = useState(true);

  async function getTags() {
    const tagList: JSX.Element[] = [];
    try {
      await fetch("/api/tags")
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < 20; i++) {
            tagList.push(
              <Link key={i} href={`/posts/tag/${data[i]}`}>
                {data[i]}
              </Link>
            );
            tagList.push(<span>,&nbsp;</span>);
          }
          setTags(tagList);
        });
    } catch (error) {
      console.error("Error", error);
    } finally {
      setTagsLoading(false);
    }
  }

  useEffect(() => {
    getTags();
  }, []);

  return { tags, tagsLoading };
}

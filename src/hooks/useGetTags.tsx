import Link from "next/link";
import { JSX, useEffect, useState } from "react";

export default function useGetTags(tagStyle: string) {
  const [tags, setTags] = useState<JSX.Element[]>([]);
  const [tagsLoading, setTagsLoading] = useState(true);

  async function getTags() {
    const tagList: JSX.Element[] = [];
    try {
      await fetch("/api/tags")
        .then((res) => res.json())
        .then((data) => {
          let tagLength: number;
          if (tagStyle === "sidebar") {
            tagLength = 5;
          } else {
            tagLength = data.length;
          }

          for (const [tag, count] of Object.entries(data).slice(0, tagLength)) {
            const tagURI = encodeURI(tag);
            tagList.push(
              <li key={tag}>
                <Link href={`/posts/tag/${tagURI}`}>{tag}</Link>
                <span
                  style={{
                    marginLeft: "10px",
                    padding: "2px 5px",
                    borderRadius: "30%",
                    background: "var(--clr-primary-50)",
                    font: ".8rem Helvetica, sans-serif",
                    fontWeight: "600",
                    color: "var(--clr-primary-600",
                  }}>
                  {count as number}
                </span>
              </li>
            );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { tags, tagsLoading };
}

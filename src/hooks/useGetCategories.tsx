import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "useGetCategories" });

export default function useGetCategories(categoryStyle: string) {
  const [categories, setCategories] = useState<JSX.Element[]>([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  async function getCategories() {
    const categoryList: JSX.Element[] = [];
    try {
      log.trace("Fetching all categories");
      await fetch("/api/categories")
        .then((res) => res.json())
        .then((data) => {
          let catLength: number;
          if (categoryStyle === "sidebar") {
            if (data.length > 10) {
              catLength = 10;
            } else {
              catLength = data.length;
            }
          } else {
            catLength = data.length;
          }

          for (let i = 0; i < catLength; i++) {
            categoryList.push(
              <li key={`category-${i}`}>
                <Link href={`/posts/category/${data[i].post_category}`}>{data[i].post_category}</Link>
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
                  {data[i].count}
                </span>
              </li>
            );
          }
          setCategories(categoryList);
        });
      log.trace("Fetched all categories");
    } catch (error) {
      log.error(error, "Error fetching all categories");
    } finally {
      setCategoryLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories, categoryLoading };
}

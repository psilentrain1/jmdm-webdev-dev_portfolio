import Link from "next/link";
import { JSX, useEffect, useState } from "react";

export default function useGetCategories() {
  const [categories, setCategories] = useState<JSX.Element[]>([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  async function getCategories() {
    const categoryList: JSX.Element[] = [];
    try {
      await fetch("/api/categories")
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            categoryList.push(
              <li key={i}>
                <Link href={`/category/${data[i].post_category}`}>{data[i].post_category}</Link>
              </li>
            );
          }
          setCategories(categoryList);
        });
    } catch (error) {
      console.error("Error", error);
    } finally {
      setCategoryLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, categoryLoading };
}

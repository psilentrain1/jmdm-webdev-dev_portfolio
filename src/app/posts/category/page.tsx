"use client";
import useGetCategories from "@/hooks/useGetCategories";
import styles from "../page.module.css";

export default function Category() {
  const { categories, categoryLoading } = useGetCategories("page");

  return (
    <>
      <h2>Categories</h2>
      <ul className={styles.posts__taglist}>{categoryLoading ? <li>Loading...</li> : categories}</ul>
    </>
  );
}

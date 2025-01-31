"use client";
import useGetCategories from "@/hooks/useGetCategories";
import styles from "../page.module.css";

export default function Category() {
  const { categories, categoryLoading } = useGetCategories();

  return (
    <>
      <h2>Categories</h2>
      <ul>{categoryLoading ? <li>Loading...</li> : categories}</ul>
    </>
  );
}

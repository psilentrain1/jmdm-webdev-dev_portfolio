"use client";
import styles from "@/app/office/page.module.css";
import { useGetPostsOffice } from "@/hooks/useGetPosts";
import { useState } from "react";

export default function OfficePosts() {
  const [sort, setSort] = useState({
    status: "all",
    column: "post_date",
    direction: "DESC",
  });
  const { posts, postLoading } = useGetPostsOffice({ published: sort.status, sort: sort.column, direction: sort.direction });
  return (
    <>
      <div className={styles.post__filtersort}>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={sort.status} onChange={(e) => setSort({ ...sort, status: e.target.value })}>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" name="sort" value={sort.column} onChange={(e) => setSort({ ...sort, column: e.target.value })}>
          <option value="post_date">Date</option>
          <option value="post_title">Title</option>
          <option value="post_category">Category</option>
        </select>
        <label htmlFor="direction">Direction:</label>
        <select id="direction" name="direction" value={sort.direction} onChange={(e) => setSort({ ...sort, direction: e.target.value })}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      <table className={styles.post__table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Post Date</th>
            <th>Category</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{postLoading ? <span>Loading...</span> : posts}</tbody>
      </table>
    </>
  );
}

"use client";
import Link from "next/link";
import "../globals.css";
import "highlight.js/styles/foundation.css";
import styles from "./page.module.css";
import useGetCategories from "@/hooks/useGetCategories";
import useGetTags from "@/hooks/useGetTags";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  const { categories, categoryLoading } = useGetCategories("sidebar");
  const { tags, tagsLoading } = useGetTags("sidebar");

  return (
    <div className={styles.posts}>
      <div className={styles.posts__left}>
        <header className={styles.posts__header}>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#projects">Projects</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/#contact">Contact Me</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.posts__main}>{children}</main>
        <footer className={styles.posts__footer}>
          &copy; 2025 James Drake. All rights reserved.{" "}
          <Link href="https://github.com/psilentrain1/jmdm-webdev-dev_portfolio/issues/new" target="_blank">
            Report Issues.
          </Link>
        </footer>
      </div>
      <div className={styles.posts__right}>
        <div className={styles.posts__sidebar}>
          <div className={styles.posts__brand}>
            <h2 className={styles.posts__title}>James Drake</h2>
            <div className={styles.posts__subtitle}>Desktop and Web Developer</div>
          </div>
          <div className={styles.posts__sidebar__content}>
            <div className={styles.posts__categories}>
              <h4>Categories</h4>
              <ul>{categoryLoading ? <li>Loading...</li> : categories}</ul>
              <span className={styles.posts__sidebar__viewall}>
                <Link href={"/posts/category"}>View all</Link>
              </span>
            </div>
            <div className={styles.posts__tags}>
              <h4>Tags</h4>
              <ul>{tagsLoading ? <div>Loading...</div> : tags}</ul>
              <span className={styles.posts__sidebar__viewall}>
                <Link href={"/posts/tag"}>View all</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

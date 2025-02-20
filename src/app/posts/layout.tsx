import "../globals.css";
import "highlight.js/styles/foundation.css";
import styles from "./page.module.css";

import Script from "next/script";
import { PostsPageHeader, PostsPageSidebar, PostsPageFooter } from "./Posts";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script src="https://analytics.jamesdraketech.com/script.js" data-website-id="e4d5d030-276c-4a8a-81b1-f5e12d5c32b6" />
      <div className={styles.posts}>
        <div className={styles.posts__left}>
          <PostsPageHeader />
          <main className={styles.posts__main}>{children}</main>
          <PostsPageFooter />
        </div>
        <PostsPageSidebar />
      </div>
    </>
  );
}

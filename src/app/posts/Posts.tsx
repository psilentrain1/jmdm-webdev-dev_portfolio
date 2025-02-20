"use client";
import Link from "next/link";
import "highlight.js/styles/foundation.css";
import styles from "./page.module.css";
import { useDeviceType } from "@/hooks/useDeviceType";
import { DesktopHeader, MobileHeader, Sidebar, Hamburger } from "@/components/PostComponents";

export function PostsPageHeader() {
  const { isMobile, isDesktop } = useDeviceType();

  return (
    <>
      {isDesktop && <DesktopHeader />}
      {isMobile && <MobileHeader />}
      {isMobile && <Hamburger />}
    </>
  );
}

export function PostsPageSidebar() {
  const { isDesktop } = useDeviceType();

  return <>{isDesktop && <Sidebar />}</>;
}

export function PostsPageFooter() {
  return (
    <footer className={styles.posts__footer}>
      &copy; 2025 James Drake. All rights reserved. <Link href="/privacy">Privacy Policy</Link>
      {" | "}
      <Link href="https://github.com/psilentrain1/jmdm-webdev-dev_portfolio/issues/new" target="_blank">
        Report Issues.
      </Link>
    </footer>
  );
}

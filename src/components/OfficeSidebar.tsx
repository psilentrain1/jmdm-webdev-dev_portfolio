"use client";
import styles from "@/app/office/page.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function OfficeSidebar() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className={styles.office__sidebar}>
          <div className={styles.office__sidebar__branding}>
            <div className={styles.office__sidebar__branding__header}>James Drake</div>
            <div className={styles.office__sidebar__branding__subheader}>Back Office</div>
          </div>

          <nav className={styles.office__sidebar__nav}>
            <ul>
              <li>
                <Link href="/">Portfolio Home</Link>
              </li>
              <li>
                <Link href="/office">Office Home</Link>
              </li>
              <li>
                <Link href="/office/posts">Posts</Link>
              </li>
              <li>
                <Link href="/office/logviewer">Log Viewer</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.office__sidebar__user}>
            <nav className={styles.office__sidebar__usernav}>
              <ul>
                <li>
                  <Link href="/">{session?.user?.name}</Link>
                </li>
                <li>
                  <Link href="/">Settings</Link>
                </li>
                <li>
                  <Link href="#" onClick={() => signOut()}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <footer className={styles.office__sidebar__footer}>
            <p>&copy;2025 James Drake. All rights reserved.</p>
          </footer>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.office__sidebar}>
        <div className={styles.office__sidebar__branding}>
          <div className={styles.office__sidebar__branding__header}>James Drake</div>
          <div className={styles.office__sidebar__branding__subheader}>Back Office</div>
        </div>

        <nav className={styles.office__sidebar__nav}>
          <ul>
            <li>
              <Link href="/">Portfolio Home</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.office__sidebar__user}>
          <nav className={styles.office__sidebar__usernav}>
            <ul>
              <li>
                <Link href="#" onClick={() => signIn()}>
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <footer className={styles.office__sidebar__footer}>
          <p>&copy;2025 James Drake. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

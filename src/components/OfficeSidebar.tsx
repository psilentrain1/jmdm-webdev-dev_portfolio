import styles from "@/app/office/page.module.css";
import Link from "next/link";

export default function OfficeSidebar() {
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
                <Link href="/">User Name</Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
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

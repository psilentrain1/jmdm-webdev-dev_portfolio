import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import styles from "../app/page.module.css";

export default function Sidebar() {
  return (
    <>
      <div className={styles.home__sidebar}>
        <div className={styles.home__sidebar_content}>
          <div className={styles.home__image}>
            <Image src="/james.jpg" alt="A photo of James Drake" width={200} height={267} />
          </div>
          <nav className={styles.home__nav}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              {/* Temporarily disabling until there is content for this section. */}
              {/* <li>
                      <Link href="/#projects">Projects</Link>
                    </li> */}
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/#contact">Contact Me</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.home__social}>
            <Link href="https://github.com/psilentrain1" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/james-drake-782a16316/" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://bsky.app/profile/jamesdraketech.bsky.social" target="_blank">
              <SiBluesky />
            </Link>
            <Link href="https://www.reddit.com/user/JamesDrake-Tech/" target="_blank">
              <FaReddit />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

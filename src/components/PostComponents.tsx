import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../app/posts/page.module.css";
import useGetCategories from "@/hooks/useGetCategories";
import useGetTags from "@/hooks/useGetTags";
import { FcMenu } from "react-icons/fc";
import { SlClose } from "react-icons/sl";

export function DesktopHeader() {
  return (
    <>
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
    </>
  );
}

export function MobileHeader() {
  return (
    <>
      <header className={styles.posts__mobile__header}>
        <Link className={styles.posts__brand__link} href="/">
          <div className={styles.posts__brand}>
            <h2 className={styles.posts__title}>James Drake</h2>
            <div className={styles.posts__subtitle}>Desktop and Web Developer</div>
          </div>
        </Link>
      </header>
    </>
  );
}

export function Sidebar() {
  const { categories, categoryLoading } = useGetCategories("sidebar");
  const { tags, tagsLoading } = useGetTags("sidebar");

  return (
    <>
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
    </>
  );
}

export function Hamburger() {
  const { categories, categoryLoading } = useGetCategories("sidebar");
  const { tags, tagsLoading } = useGetTags("sidebar");
  const menuRef = useRef<HTMLDivElement>(null);

  function openMenu() {
    document.getElementById("mobileMenu")?.classList.add(styles.posts__mobile__menu__open);
  }

  function closeMenu() {
    document.getElementById("mobileMenu")?.classList.remove(styles.posts__mobile__menu__open);
  }

  function handleLinkClick(e: React.MouseEvent<HTMLDivElement>) {
    const isLink = (e.target as HTMLElement).tagName === "A";

    if (isLink) {
      closeMenu();
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className={styles.posts__hamburger}>
        <div className={styles.posts__hamburger__icon} onClick={() => openMenu()}>
          <FcMenu />
        </div>
      </div>
      <div id="mobileMenu" className={styles.posts__mobile__menu} ref={menuRef} onClick={handleLinkClick}>
        <div className={styles.posts__mobile__menu__close}>
          <div onClick={() => closeMenu()}>
            <SlClose />
          </div>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
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
        <div className={styles.posts__sidebar__content}>
          <div className={styles.posts__categories}>
            <h4>Categories</h4>
            <ul>{categoryLoading ? <li>Loading...</li> : categories}</ul>
            <span className={styles.posts__sidebar__viewall}>
              <Link href={"/posts/category"} onClick={() => closeMenu()}>
                View all
              </Link>
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
        {/* <div className={styles.posts__mobile__social}>
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
          </div> */}
      </div>
    </>
  );
}

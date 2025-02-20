import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../app/page.module.css";
import { FcMenu } from "react-icons/fc";
import { SlClose } from "react-icons/sl";
import { FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

export default function Hamburger() {
  const menuRef = useRef<HTMLDivElement>(null);

  function openMenu() {
    document.getElementById("mobileMenu")?.classList.add(styles.home__mobile__menu__open);
  }

  function closeMenu() {
    document.getElementById("mobileMenu")?.classList.remove(styles.home__mobile__menu__open);
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
      <div className={styles.home__hamburger}>
        <div className={styles.home__hamburger__icon} onClick={() => openMenu()}>
          <FcMenu />
        </div>
      </div>
      <div id="mobileMenu" className={styles.home__mobile__menu} ref={menuRef} onClick={handleLinkClick}>
        <div className={styles.home__mobile__menu__close}>
          <div onClick={() => closeMenu()}>
            <SlClose />
          </div>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          {/* <li>
              <Link href="#projects">Projects</Link>
            </li> */}
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="#contact">Contact Me</Link>
          </li>
        </ul>
        <div className={styles.home__mobile__social}>
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
    </>
  );
}

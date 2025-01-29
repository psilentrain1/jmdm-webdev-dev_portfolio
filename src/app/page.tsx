import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";
import { SiBluesky, SiExpress, SiReact, SiSqlite, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className={styles.home__main}>
        <div className={styles.home__page}>
          <div className={styles.home__sidebar}>
            <div className={styles.home__sidebar_content}>
              <div className={styles.home__image}>
                <Image src="/james.jpg" alt="James Drake" width={200} height={275} />
              </div>
              <nav className={styles.home__nav}>
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
              <div className={styles.home__social}>
                <Link href="https://github.com/psilentrain1" target="_blank">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/james-drake-782a16316/" target="_blank">
                  <FaLinkedin />
                </Link>
                <Link href="" target="_blank">
                  <SiBluesky />
                </Link>
                <Link href="https://www.reddit.com/user/JamesDrake-Tech/" target="_blank">
                  <FaReddit />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.home__content}>
            <section className={styles.home__title}>
              <h1>James Drake</h1>
              <span>Desktop and Web Developer</span>
            </section>
            <section className={styles.home__about}>
              <h3 id="about">A little about me</h3>
              <p>
                Hey! I&apos;m a software developer who brings creativity from multiple worlds into my code. With experience in both desktop
                and web development, I bridge the gap between robust local applications and modern web experiences.
              </p>
              <span className={styles.home__sectionlink}>
                <Link href="/#">Read more about me</Link>
              </span>
            </section>
            <section className={styles.home__projects}>
              <h3 id="projects">A selection of projects</h3>
              <div className={styles.home__project_container}>
                <div className={styles.home__project_header}>
                  <span className={styles.home__project_title}>Application Tracker</span>
                  <span className={styles.home__project_stack}>
                    <SiReact />
                    <SiTypescript />
                    <SiExpress />
                    <SiSqlite />
                  </span>
                </div>
                <div className={styles.home__project_description}>
                  <p>A React App that helps the user track job applications and provides useful analytics.</p>
                </div>
                <div className={styles.home__project_links}>
                  <Link href="/#">Live Demo</Link> | <Link href="/#">GitHub</Link>
                </div>
              </div>
              <span className={styles.home__sectionlink}>
                <Link href="/#">View more projects</Link>
              </span>
            </section>
            <section className={styles.home__contacts}>
              <h3 id="contact">Contact me!</h3>
              <p>
                I&apos;m always excited to collaborate on new projects that challenge me to use both my technical skills and creative
                instincts. <Link href="mailto:james@jamesdraketech.com">Let&apos;s build something amazing together!</Link>
              </p>
              <p>
                Want a developer who thinks both logically and creatively?{" "}
                <Link href="mailto:james@jamesdraketech.com">Let&apos;s talk about how I can help bring your ideas to life.</Link>
              </p>
              <form action="mailto:james@jamesdraketech.com">
                <button type="submit">Reach out now!</button>
              </form>
            </section>
            <footer className={styles.home__footer}>
              &copy; 2025 James Drake. All rights reserved.{" "}
              <Link href="https://github.com/psilentrain1/jmdm-webdev-dev_portfolio/issues/new" target="_blank">
                Report Issues.
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

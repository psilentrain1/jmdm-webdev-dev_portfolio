"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useDeviceType } from "@/hooks/useDeviceType";
import { SiCss3, SiElectron, SiHtml5, SiReact, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Home() {
  const [deviceType, isLoading] = useDeviceType();
  const { isMobile } = deviceType;

  return (
    <>
      {isLoading ? (
        <div>{}</div>
      ) : (
        <>
          <section className={styles.home__title}>
            <h1>James Drake</h1>
            <span>Desktop and Web Developer</span>
          </section>
          {isMobile && <MobileImage />}
          <section className={styles.home__about}>
            <h3 id="about">A little about me</h3>
            <p>
              Hey! I&apos;m a software developer who brings creativity from multiple worlds into my code. With experience in both desktop
              and web development, I bridge the gap between robust local applications and modern web experiences.
            </p>
            <span className={styles.home__sectionlink}>
              <Link href="/posts/how-did-i-get-here">Read more about me</Link>
            </span>
          </section>
          {/* Temp disabling until there is content to put here */}
          <section className={styles.home__projects}>
            <h3 id="projects">A selection of projects</h3>
            <div className={styles.home__project_container}>
              <div className={styles.home__project_header}>
                <span className={styles.home__project_title}>Tickr</span>
                <span className={styles.home__project_stack}>
                  <SiElectron />
                  <SiReact />
                  <SiTypescript />
                  <SiSqlite />
                  <SiTailwindcss />
                </span>
              </div>
              <div className={styles.home__project_description}>
                <p>Tickr is a simple, lightweight app to track the performance of stocks.</p>
              </div>
              <div className={styles.home__project_links}>
                {/* <Link href="/#" target="blank">Live Demo</Link> |  */}
                <Link href="https://github.com/psilentrain1/jmdm-apps-tickr" target="blank">
                  GitHub
                </Link>
              </div>
            </div>
            <div className={styles.home__project_container}>
              <div className={styles.home__project_header}>
                <span className={styles.home__project_title}>ROOTS.</span>
                <span className={styles.home__project_stack}>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiTypescript />
                  <SiTailwindcss />
                </span>
              </div>
              <div className={styles.home__project_description}>
                <p>A simple single-page website for a fictional community bakery named Roots.</p>
              </div>
              <div className={styles.home__project_links}>
                <Link href="https://preview.jamesdraketech.com/roots" target="blank">
                  Live Demo
                </Link>{" "}
                |{" "}
                <Link href="https://github.com/psilentrain1/jmdm-apps-tickr" target="blank">
                  GitHub
                </Link>
              </div>
            </div>
            <span className={styles.home__sectionlink}>
              <Link href="/posts">View more projects</Link>
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
        </>
      )}
    </>
  );
}

function MobileImage() {
  return (
    <section className={styles.home__mobile__image}>
      <Image src="/james.jpg" alt="A photo of James Drake" width={200} height={267} />
    </section>
  );
}

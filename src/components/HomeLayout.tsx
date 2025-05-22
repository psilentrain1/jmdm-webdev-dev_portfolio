"use client";
import Link from "next/link";
import Script from "next/script";
import styles from "../app/page.module.css";
import Sidebar from "@/components/HomeSidebar";
import Hamburger from "@/components/HomeHamburger";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function HomeLayoutComponent({ children }: { children: React.ReactNode }) {
  const [deviceType, isLoading] = useDeviceType();
  const { isMobile, isDesktop } = deviceType;

  return (
    <>
      {isLoading ? (
        <div>{}</div>
      ) : (
        <>
          <Script src="https://analytics.jamesdraketech.com/script.js" data-website-id="e4d5d030-276c-4a8a-81b1-f5e12d5c32b6" />
          <div className={styles.home__main}>
            <div className={styles.home__page}>
              {isDesktop && <Sidebar />}
              {isMobile && <Hamburger />}
              <div className={styles.home__content}>
                {children}

                <footer className={styles.home__footer}>
                  &copy; 2025 James Drake. All rights reserved. <Link href="/privacy">Privacy Policy</Link>
                  {" | "}
                  <Link href="https://github.com/psilentrain1/jmdm-webdev-dev_portfolio/issues/new" target="_blank">
                    Report Issues.
                  </Link>
                </footer>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

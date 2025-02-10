import OfficeSidebar from "@/components/OfficeSidebar";
import styles from "./page.module.css";

export default function OfficeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.office__page}>
        <OfficeSidebar />
        <div className={styles.office__content}>{children}</div>
      </div>
    </>
  );
}

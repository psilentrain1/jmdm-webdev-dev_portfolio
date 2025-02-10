import OfficeSidebar from "@/components/OfficeSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export default function OfficeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.office__page}>
        <OfficeSidebar />
        <div className={styles.office__right}>
          <Breadcrumbs
            homeElement="Office"
            separator=" > "
            containerClasses={styles.office__breadcrumbs}
            listClasses={styles.office__breadcrumbs__item}
            activeClasses={styles.office__breadcrumbs__item_active}
            capitalizeLinks={true}
          />
          <div className={styles.office__content}></div>
          {children}
        </div>
      </div>
    </>
  );
}

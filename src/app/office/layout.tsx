import OfficeSidebar from "@/components/OfficeSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export const metadata = {
  title: "Office - James Drake",
};

export default async function OfficeLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <>
      <SessionProvider session={session}>
        <div className={styles.office__page}>
          <OfficeSidebar />
          <div className={styles.office__right}>
            <Breadcrumbs
              separator=" > "
              containerClasses={styles.office__breadcrumbs}
              listClasses={styles.office__breadcrumbs__item}
              activeClasses={styles.office__breadcrumbs__item_active}
              capitalizeLinks={true}
            />
            <div className={styles.office__content}>{children}</div>
          </div>
        </div>
      </SessionProvider>
    </>
  );
}

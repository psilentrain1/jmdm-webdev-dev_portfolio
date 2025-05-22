import { Metadata } from "next";
import "./globals.css";
import HomeLayoutComponent from "@/components/HomeLayout";

export const metadata: Metadata = {
  title: {
    template: "%s - James Drake",
    default: "James Drake - Developer",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <HomeLayoutComponent>{children}</HomeLayoutComponent>
        </main>
      </body>
    </html>
  );
}

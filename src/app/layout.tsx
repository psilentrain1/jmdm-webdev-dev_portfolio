import "./globals.css";

export const metadata = {
  title: "James Drake - Developer",
  description: "James Drake's Development Portfolio Website",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

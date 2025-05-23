import { Metadata } from "next";
import RecentPosts from "./RecentPosts";

export const metadata: Metadata = {
  title: "Recent Posts",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  keywords: ["developer", "programmer", "software", "James Drake"],
};

export default function Posts() {
  return (
    <>
      <RecentPosts />
    </>
  );
}

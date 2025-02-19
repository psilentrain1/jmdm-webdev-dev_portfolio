import { Metadata } from "next";
import RecentPosts from "./RecentPosts";

export const metadata: Metadata = {
  title: "Recent Posts - James Drake",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
};

export default function Posts() {
  return (
    <>
      <RecentPosts />
    </>
  );
}

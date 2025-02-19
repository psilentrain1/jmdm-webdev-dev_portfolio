import { Metadata } from "next";
import RecentPosts from "./RecentPosts";

export const metadata: Metadata = {
  title: "Recent Posts - James Drake",
};

export default function Posts() {
  return (
    <>
      <RecentPosts />
    </>
  );
}

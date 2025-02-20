import { Metadata } from "next";
import TagList from "./Tags";

export const metadata: Metadata = {
  title: "Tags",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
};

export default function Tags() {
  return (
    <>
      <TagList />
    </>
  );
}

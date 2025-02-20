import { Metadata } from "next";
import Categories from "./Categories";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  keywords: ["developer", "programmer", "software", "James Drake"],
};

export default function Category() {
  return (
    <>
      <Categories />
    </>
  );
}

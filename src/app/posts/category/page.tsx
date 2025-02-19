import { Metadata } from "next";
import Categories from "./Categories";

export const metadata: Metadata = {
  title: "Categories - James Drake",
};

export default function Category() {
  return (
    <>
      <Categories />
    </>
  );
}

import { Metadata } from "next";
import TagList from "./Tags";

export const metadata: Metadata = {
  title: "Tags - James Drake",
};

export default function Tags() {
  return (
    <>
      <TagList />
    </>
  );
}

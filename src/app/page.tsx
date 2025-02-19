import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home - James Drake",
  description: "James Drake's Development Portfolio Website",
};

export default function HomePage() {
  return <Home />;
}

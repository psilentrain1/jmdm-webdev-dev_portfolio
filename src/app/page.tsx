import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home - James Drake",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  keywords: ["developer", "programmer", "software", "James Drake"],
};

export default function HomePage() {
  return <Home />;
}

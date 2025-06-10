import { Metadata } from "next";
import Portfolio from "./Portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  keywords: ["developer", "programmer", "software", "James Drake"],
};

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
    </>
  );
}

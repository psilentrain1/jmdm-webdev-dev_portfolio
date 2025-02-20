import { Metadata } from "next";
import PrivacyPolicy from "./Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  keywords: ["developer", "programmer", "software", "James Drake"],
};

export default function Privacy() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}

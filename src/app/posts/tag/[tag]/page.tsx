import Tag from "./Tag";

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const pageParams = await params;

  return {
    title: `Tag: ${pageParams.tag} - James Drake`,
    description:
      "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  };
}

export default function PostsByTag() {
  return (
    <>
      <Tag />
    </>
  );
}

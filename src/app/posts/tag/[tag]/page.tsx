import Tag from "./Tag";

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const pageParams = await params;

  return {
    title: `Tag: ${pageParams.tag} - James Drake`,
  };
}

export default function PostsByTag() {
  return (
    <>
      <Tag />
    </>
  );
}

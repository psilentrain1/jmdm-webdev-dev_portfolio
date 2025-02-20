import Category from "./Category";

export async function generateMetadata({ params }: { params: { category: string } }) {
  const pageParams = await params;

  return {
    title: `Category: ${pageParams.category}`,
    description:
      "James Drake is a software developer with experience in both desktop and web development who brings creativity from multiple worlds into his code.",
  };
}

export default async function PostsByCategory() {
  return (
    <>
      <Category />
    </>
  );
}

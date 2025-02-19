import Category from "./Category";

export async function generateMetadata({ params }: { params: { category: string } }) {
  const pageParams = await params;

  return {
    title: `Category: ${pageParams.category} - James Drake`,
  };
}

export default async function PostsByCategory() {
  return (
    <>
      <Category />
    </>
  );
}

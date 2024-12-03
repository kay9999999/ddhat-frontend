import { getStrapiURL } from "@/lib/utils";
import CategoryButton from "./Category-button";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/categories";
  const baseUrl = getStrapiURL();
  const url = new URL(path, baseUrl);
  const data = await fetchData(url.href);
  return data;
}

export async function CategorySelect() {
  const data = await loader();
  const categories = data?.data;
  if (!categories) return null;

  return (
    <div className="w-3/4 flex gap-2 justify-center items-center">
      {categories.map(({ title, documentId }) => (
        <CategoryButton key={documentId} value={title}>
          {title}
        </CategoryButton>
      ))}
      <CategoryButton value="">All</CategoryButton>
    </div>
  );
}

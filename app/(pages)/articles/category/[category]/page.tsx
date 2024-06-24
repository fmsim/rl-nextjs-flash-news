import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { CATEGORIES_ITEMS, NAV_ITEMS } from "@/app/constant";
import { Article, ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";

// export const revalidate = 1000;

// export function generateStaticParams() {
//   return NAV_ITEMS.map((navItem) => {
//     return {
//       category: navItem.category,
//     };
//   });
// }

export const dynamic = "force-dynamic";

export default async function ArticleByCategoryPage(p: {
  params: { category: ArticleCategory; article: Article };
}) {
  const articles = await ArticleApi.fetchByCategory(p.params.category);

  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image
          src={CATEGORIES_ITEMS[p.params.category].src}
          alt="Category icon"
          className="w-10 h-10"
        />
        <h1 className="text-4xl font-bold capitalize">
          {p.params.category} news
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}

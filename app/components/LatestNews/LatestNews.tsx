import Image from "next/image";
import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "../ArticleList/ArticleList";
import topPng from "@/public/top.png";

export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();

  return (
    <>
      <div className="flex items-center space-x-4 mb-16">
        <Image src={topPng} alt="Latest news icon" className="w-10 h-10" />
        <h1 className="text-4xl font-bold capitalize">Latest news</h1>
      </div>
      <ArticleList articles={articles} />
    </>
  );
}

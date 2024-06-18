import { Article, ArticleListResponse } from "../types/article-type";

export class ArticleApi {
  /*
   * In TypeScript, you can use the static keyword to define static class members, including properties.
   * A static property is a property that is shared across all instances of a class,
   * and can be accessed without creating an instance of the class.
   */
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch("http://localhost:3090/news")
      ).json()) as ArticleListResponse
    ).results;
  }
}

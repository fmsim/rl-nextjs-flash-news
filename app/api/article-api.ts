import {
  Article,
  ArticleCategory,
  ArticleListResponse,
} from "../types/article-type";

export class ArticleApi {
  /*
   * In TypeScript, you can use the static keyword to define static class members, including properties.
   * A static property is a property that is shared across all instances of a class,
   * and can be accessed without creating an instance of the class.
   */
  static async fetchToday(): Promise<Article[]> {
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}`)
      ).json()) as ArticleListResponse
    ).results;
  }

  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return (
      (await (
        await fetch(`${process.env.API_BASE_URL}?category=${category}`)
      ).json()) as ArticleListResponse
    ).results;
  }
}

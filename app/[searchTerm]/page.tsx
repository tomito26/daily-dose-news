import getSearchResults from "@/lib/getSearchResults";
import { data } from "autoprefixer"
import ArticlesPagination from "../components/ArticlesPagination";

type Params = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Params) {
  const resultsData: Promise<Article[]> = getSearchResults(searchTerm);
  const articles = await resultsData;
  const sortedArticles = articles.sort((a,b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="md:px-20 sm:px-10 py-5">
      <ArticlesPagination articles={articles}/>
    </div>
  );
}

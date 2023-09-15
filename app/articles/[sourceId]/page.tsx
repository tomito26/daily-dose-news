import getArticles from "@/lib/getArticles"
import Articles from "./components/Articles";

type Props = {
  params: {
    sourceId: string
  }
}

export default async function page({ params: { sourceId } }: Props) {
  const articleData: Promise<Article[]> = getArticles(sourceId);

  const articles = await articleData;

  return (
    <div className="px-20 py-5">
      <Articles articles={articles} />
    </div>
  )
}
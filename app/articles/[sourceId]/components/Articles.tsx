import Article from "./Article"

type Props = {
  articles: Article[]
}

export default function Articles({ articles }: Props) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {articles.map(article => <Article key={article.title} article={article}/>)}
    </div>
  )
}
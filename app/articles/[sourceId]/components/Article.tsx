import Image from "next/image"
import Link from "next/link";

type Props = {
  article: Article
}

export default function Article({ article }: Props) {
 const date = new Intl.DateTimeFormat('en-Us', { dateStyle: "long" }).format(new Date(article.publishedAt));

  return (
    <Link href={article.url} target='_blank'>
    <div className="w-full bg-white rounded-lg">
      <div className="w-full">
        <img
          className="w-full h-52 rounded-t-lg object-cover"
          src={article.urlToImage}
          alt={article.title}
        />
      </div>
      <div className="px-3 py-2">
        <h2 className="text-xl font-bold pb-2">{article.title.length <= 25 ? article.title : `${article.title.substring(0, 28)}...`}</h2>
        <p className="pb-2 text-base text-black/90 font-normal">{article.description?.length  <= 100 ? article.description : `${article.description?.substring(0,60)}...`}</p>
        <p className="text-sm text-black/90 flex items-center">
          <span className="mr-1">{date}</span>
          <span className="h-1 w-1 bg-black/80 rounded-full"/>
          <span className="font-medium ml-1">{article.author ?  article.author?.length  <= 20 ? article.author :  `${article.author?.substring(0,20)}...` : article.source.name  }</span>
        </p>
      </div>
    </div>
    </Link>
  )
}
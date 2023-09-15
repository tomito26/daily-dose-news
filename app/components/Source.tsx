import Link from "next/link";

type Props = {
  source: Source
}

export default function Source({ source }: Props) {
  return (
    <Link href={`/articles/${source.id}`}>
    <div className="bg-white rounded-sm  p-3 w-full">
      <h1 className="text-2xl mb-2">{ source.name.length <= 10 ? source.name : `${source.name.substring(0,19)}...` }</h1>
      <p>{source.description.length <= 100 ? source.description: `${source.description.substring(0,100)}...`}</p>
    </div>
    </Link>
  )
}
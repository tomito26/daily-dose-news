import Source from "./Source"

type Props = {
  sources: Source[]
}

export default function Sources({ sources }: Props) {
 
  return (
    <div className="grid grid-cols-3 gap-4 ">
     {sources.map(source => <Source key={source.id} source={source}/>)}
    </div>
  )
}
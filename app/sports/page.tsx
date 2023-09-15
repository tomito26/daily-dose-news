import getSportsSources from "@/lib/getSportsSources"
import Sources from "../components/Sources";

export default async function page() {
  const sourcesData: Promise<Source[]> = getSportsSources();

  const sources = await sourcesData
  return (
    <main className="px-20 py-7">
      <Sources sources={sources}/>
    </main>
  )
}

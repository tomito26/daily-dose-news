
import getEntertainment from "@/lib/getEntertainment";
import Sources from "../components/Sources";

export default async function page() {
  const sourcesData: Promise<Source[]> = getEntertainment();

  const sources = await sourcesData;
  return (
    <main className="px-20 py-7">
      <Sources sources={sources}/>
    </main>
  )
}

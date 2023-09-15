import getSources from "@/lib/getSources";
import Sources from "./components/Sources";

export default async function Home() {
  const sourcesData: Promise<Source[]> = getSources();

  const sources = await sourcesData;
 
  return (
    <main className="px-36 pt-5">
      <Sources sources={sources}/>
    </main>
  )
}

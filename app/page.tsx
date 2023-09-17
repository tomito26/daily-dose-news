import getSources from "@/lib/getSources";
import HomePage from "./components/HomePage";

export default async function Home() {
  const sourcesData: Promise<Source[]> = getSources();

  const sources = await sourcesData;
 
  return (
    <main className="px-36 pt-5">
     <HomePage sources={sources}/>
    </main>
  )
}

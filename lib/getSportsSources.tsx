export default async function getSportsSources() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
  
  if(!res.ok) throw new Error("failed to fetch sports sources");

  const data = await res.json()

  return data.sources
}

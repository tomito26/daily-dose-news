export default async function getArticles(sourceId: string) {
  const res  = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
  if(!res.ok) throw new Error("Failed to fetch the articles")
  
  const data = await res.json()
  return data.articles
}

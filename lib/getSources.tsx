export default async function getSources() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
  
  if(!res.ok) throw new Error('Failed to fetch articles')

  const data = await res.json()
  

  return data.sources
}

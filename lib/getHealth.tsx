export default async function getHealth() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=health&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`) 
  
  if(!res.ok) throw new Error('Failed for fetch general sources')

  const data = await res.json() 
  
  return  data.sources
}

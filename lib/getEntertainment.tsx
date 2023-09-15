
export default async function getEntertainment() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
  
  if(!res.ok) throw new Error('Failed to fetch technology sources');

  const data = await res.json();

  return data.sources
}

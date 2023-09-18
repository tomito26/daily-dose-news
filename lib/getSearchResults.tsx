export default async function getSearchResults(searchTerm: string) {
   const res = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&from=2023-08-20&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
  
  if(!res.ok) throw new Error('Failed to fetch search results');


  const data = await  res.json();
  
  return data.articles
}

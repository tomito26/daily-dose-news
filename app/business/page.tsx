import getPoliticalSources from '@/lib/getBusinessSources'
import React from 'react'
import Sources from '../components/Sources'

export default async function page() {
  const sourcesData: Promise<Source[]> = getPoliticalSources()

  const sources = await sourcesData;

 
  return (
    <main className='px-20 py-5'>
      <Sources  sources={sources}/>
    </main>
  )
}

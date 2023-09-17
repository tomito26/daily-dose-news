'use client'
import { useState } from "react"
import Pagination from "./Pagination"
import Sources from "./Sources"

type Props = {
  sources: Source[]
}
const HomePage = ({ sources }:Props) => {
  const[currentPage, setCurrentPage] = useState(1);
  const[sourcesPerPage] = useState(10);

  const indexOfLastSource =  currentPage * sourcesPerPage;
  const indexOfFirstSource =  indexOfLastSource - sourcesPerPage;
  const currentSources = sources.slice(indexOfFirstSource, indexOfLastSource)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      <Sources sources={currentSources}/>
      <Pagination totalSources={sources} sourcesPerPage={sourcesPerPage} paginate={paginate}/>
    </div>
  )
}

export default HomePage
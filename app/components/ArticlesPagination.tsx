'use client'
import { useState } from "react";
import Pagination from "./Pagination";
import ArticlesPaginate from "./ArticlesPaginate";
import Articles from "../articles/[sourceId]/components/Articles";

type Props = {
  articles: Article[];
}

export default function ArticlesPagination({ articles }: Props) {
  const[currentPage, setCurrentPage] = useState(1);
  const[articlesPerPage] = useState(12);

  const indexOfLastArticle =  currentPage * articlesPerPage;
  const indexOfFirstArticle =  indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber) 
  return (
    <div>
      <Articles  articles={currentArticles}/>
      <ArticlesPaginate articlesPerPage={articlesPerPage} totalArticles={articles} paginate={paginate} />
    </div>
  )
}
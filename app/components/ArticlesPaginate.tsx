import { useState } from "react";

type Props = {
  articlesPerPage: number;
  totalArticles: Article[];
  paginate: (pageNumber: number) => void;
};

export default function ArticlesPaginate({
  articlesPerPage,
  totalArticles,
  paginate,
}: Props) {
  const pageNumbers = [];
  const[activePage, setActivePage] = useState(1)

  for (let i = 1; i < Math.ceil(totalArticles.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (pageNumber: number) => { 
    setActivePage(pageNumber);
    paginate(pageNumber);
  }
  return (
    <nav className="my-14 flex justify-center">
      <ul className="flex ">
        {pageNumbers.map((pageNumber) => (
          <li
            onClick={() => handlePagination(pageNumber)}
            key={pageNumber}
            className={`${activePage === pageNumber ? 'bg-white/20' : 'bg-white/30'} p-3 py-2 border-black/30 border-1 border-l cursor-pointer`}
          >
            <a href="#" className="text-white/80">{pageNumber}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

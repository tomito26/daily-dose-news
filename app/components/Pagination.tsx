"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  sourcesPerPage: number;
  totalSources: Source[];
  paginate: (pageNumber: number) => void;
};

export default function Pagination({
  sourcesPerPage,
  totalSources,
  paginate,
}: Props) {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);

  for (let i = 1; i < Math.ceil(totalSources.length / sourcesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginate = (pageNumber: number) => {
    setActivePage(pageNumber);
    paginate(pageNumber);
    console.log(pageNumber);
  };

  return (
    <nav className="flex justify-center items-center">
      <ul className="flex rounded-sm">
        {pageNumbers.map((number) => (
          <li
            className={`${
              activePage === number ? "bg-white/20" : "bg-white/30"
            }  text-white border-1 border-l cursor-pointer  border-black/30 my-10 px-3 py-2`}
            key={number}
            onClick={() => handlePaginate(number)}
          >
            <Link href="#">{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

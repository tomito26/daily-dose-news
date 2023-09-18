"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm("");
    router.push(`/${searchTerm}/`);
  
  };
  
  return (
    <form className="ml-5 relative" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-white md:w-72 h-8 text-black/90 outline-none rounded-sm px-6"
        placeholder="Search for Articles"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch className="text-slate-800 absolute top-2 left-1" />
    </form>
  );
}

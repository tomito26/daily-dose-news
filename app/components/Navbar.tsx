import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-slate-950 shadow-sm py-8 text-white mb-5">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={'images/logo'}
            alt="logo"
            height={150}
            width={150}
            priority
          />
        </Link>
        <SearchInput/>
      </div>
      <ul className="flex list-none">
        <li className="mr-5 px-2 text-white">
          <Link href="/" className="hover:text-white/80">Home</Link>
        </li>
        <li className="mr-5  px-2">
          <Link href="/health" className="hover:text-white/80">Health</Link>
        </li>
        <li className="mr-5  px-2">
          <Link href="/business" className="hover:text-white/80">Business</Link>
        </li>
        <li className="mr-5  px-2">
          <Link href="/sports" className="hover:text-white/80">Sports</Link>
        </li>
        <li className="px-2">
          <Link href="/entertainment" className="hover:text-white/80">Entertainment</Link>
        </li>
      </ul>
    </nav>
  )
}

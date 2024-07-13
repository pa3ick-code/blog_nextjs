"use client"
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Search from "./Search";


export default function Nav() {

  return (
    <>
      <nav className="flex items-center justify-between mt-8 mb-8 flex-wrap lg:hidden lg:justify-end pb-5 border-slate-200 border-b-[0.5px]">
        <div className=" flex items-center justify-between md:w-full lg:w-full">
            <Link href={'/'} className="logo mr-10 text-white dark:text-white">
                P.
            </Link>
            <div className="text-slate-500">
                <Link href={'/posts/entertainmet'} className="nav_link"> Entertainmet </Link>
                <Link href={'/posts/technology'} className="nav_link"> Technology </Link>
                <Link href={'/posts/business'} className="nav_link"> Business </Link>
                <Link href={'/posts/science'} className="nav_link"> Science </Link>
                <Link href={'/posts/health'} className="nav_link"> Health </Link>
                <Link href={'/posts/world'} className="nav_link"> World </Link>
                <Link href={'/posts/nation'} className="nav_link"> Nation </Link>
                <Link href={'/posts/sports'} className="nav_link"> Sports</Link>
            </div>
          </div>
          <Search />
      </nav>
      <MobileMenu />
    </>
  );
}

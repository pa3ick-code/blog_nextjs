"use client"
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import Search from "./Search";


export default function MobileMenu() {
    const [menu, setMenu] = useState(false)
    const handleMenu = ()=>{
        setMenu(!menu)
    }

  return (
    <nav className="hidden items-center justify-between m-4 flex-wrap sm:flex relative z-30">

        <div className="flex items-center relative z-40" >
            <Link href={'/'} className="logo mr-10">
                P.
            </Link>
        </div>
        <div className="text-3xl relative z-40" onClick={handleMenu} >
            {
                menu?
                <div>
                    <AiOutlineMenuFold/>
                </div>:
                <div>
                    <AiOutlineMenuUnfold/>
                </div>
            }
        </div>
        <>
        {
            menu &&
            (
                <div className="mobile_nav">
                    <div className="font-light text-slate-500 mt-32">
                        <Link href={'/posts/entertainmet'} className="sm_nav_link" onClick={handleMenu}> Entertainmet </Link>
                        <Link href={'/posts/technology'} className="sm_nav_link" onClick={handleMenu}> Technology </Link>
                        <Link href={'/posts/business'} className="sm_nav_link" onClick={handleMenu}> Business </Link>
                        <Link href={'/posts/science'} className="sm_nav_link" onClick={handleMenu}> Science </Link>
                        <Link href={'/posts/health'} className="sm_nav_link" onClick={handleMenu}> Health </Link>
                        <Link href={'/posts/world'} className="sm_nav_link" onClick={handleMenu}> World </Link>
                        <Link href={'/posts/nation'} className="sm_nav_link" onClick={handleMenu}> Nation </Link>
                        <Link href={'/posts/sports'} className="sm_nav_link" onClick={handleMenu}> Sports</Link>
                    </div>
                    <Search />
                </div>
            )
        }
        </>
    </nav>
  );
}

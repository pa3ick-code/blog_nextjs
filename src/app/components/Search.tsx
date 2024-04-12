"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handlesearch = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}/`);
    }
  return (
    <form onSubmit={handlesearch} >
        <input
            type="text" 
            value={search}
            placeholder="Search"
            onChange={e =>{setSearch(e.target.value);}}
            className="primary-bg max-w-96 rounded-lg"
        />
    </form>
  );
}

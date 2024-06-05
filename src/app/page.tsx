"use client"
import Posts from "./components/Posts";
import { Suspense } from "react";

export default function Home() {
  const fetchInfo = [
    {id:1, category: "general", max: 6},
    {id:2, category: "technology", max: 3 },
    {id:3, category: "business", max: 3 },
    {id:4, category: "science", max: 3 },
    {id:5, category: "health", max: 3 },
  ] 
  const content = (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {
        fetchInfo.map(({id, category, max}) => (
          <Suspence fallback={<h3>Loading...</h3>}>
            <Posts key={id} category={category} max={max}/>
          </Suspence>
        ))
      }
    </main>
  )

  return content;
}

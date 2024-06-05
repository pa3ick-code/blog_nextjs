"use client"
import Posts from "./components/Posts";
import { Suspense } from "react";

export default function Home() {
  const fetchInfo[] = [
    {category: "general", max: 6},
    {category: "technology", max: 3 },
    {category: "business", max: 3 },
    {category: "science", max: 3 },
    {category: "health", max: 3 },
  ] 
  const content = (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {
        fetchInfo.map(({category, max}) => (
          <Suspence fallback={<h3>Loading...</h3>}>
            <Posts category={category} max={max}/>
          </Suspence>
        ))
      }
    </main>
  )

  return content;
}

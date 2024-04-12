import SearchPosts from "@/lib/searchPosts";
import Items from "./components/Items";
import { Metadata } from "next";

type Params = {
  params: {
    searchTerm: string
  }
}

export const metadata: Metadata ={
    title: "Search"
}

export default async function Search({params: {searchTerm}}: Params) {
  const decodeURL = decodeURIComponent(searchTerm);
  const searchResult: Promise<Result[]> = await SearchPosts(decodeURL);
  const posts = await searchResult;
  const data: SearchResult[] | undefined = posts;

  const content = (
    <>
            <div className="mt-16 mb-7 font-semibold text-4xl text-center">
              <h2>Results</h2>
              <p className="block font-light text-base">result for {decodeURL}</p>
            </div>
            <div className="flex flex-wrap gap-22 justify-center">
                {   
                    data?
                    (
                        data.map(post => {
                        return <Items result={post} key={post.publishedAt}/>
                        })
                    ):
                    (
                        <p>Nothing here</p>
                    )
                }
            </div>
         </>
  )

  return content
}

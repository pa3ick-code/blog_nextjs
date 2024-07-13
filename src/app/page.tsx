
import Posts from "./components/Posts";
type MyPost = {
  id: number;
  category: string;
  max: string;
}

export default function Home() {
  const fetchInfo: MyPost[] = [
    {id: 1, category: "general", max: "6"},
    {id: 2, category: "technology", max: "3" },
    {id: 3, category: "business", max: "3" },
    {id: 4, category: "science", max: "3" },
    {id: 5, category: "health", max: "3" },
  ] 
  const content = (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="header_title">The Blog</h1>
      {
        fetchInfo.map(({id, category, max}) => (
          <div key={id}>
            <Posts category={category} max={max}/>
          </div>
        ))
      }
    </main>
  )

  return content;
}

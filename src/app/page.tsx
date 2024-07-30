
import Posts from "./components/Posts";

export default function Home() {
  const content = (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="header_title">The Blog</h1>
      <div>
        <Posts category='general' max='9'/>
      </div>
    </main>
  )

  return content;
}

import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="header_title">The Blog</h1>
      <Posts category="general" max="6"/>
      <Posts category="technology" max="3" title="Technology"/>
      <Posts category="business" max="3" title="Business"/>
      <Posts category="science" max="3" title="Science"/>
      <Posts category="health" max="3" title="Health"/>
    </main>
  );
}
import Posts from "./components/Posts";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="header_title">The Blog</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts category="general" max="6"/>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts category="technology" max="3" title="Technology"/>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts category="business" max="3" title="Business"/>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts category="science" max="3" title="Science"/>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Posts category="health" max="3" title="Health"/>
      </Suspense>
    </main>
  );
}
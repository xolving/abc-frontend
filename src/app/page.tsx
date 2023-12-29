import { allRoadmaps } from "@/.contentlayer/generated";
import Link from "next/link";
import { Card } from "../components/card";
import { Article } from "./roadmap/article";

export default function Home() {
  const sorted = allRoadmaps
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
            <Link key="/roadmap" href="/roadmap" className="text-sm duration-200 text-zinc-400 hover:text-zinc-200">
              Roadmap
            </Link>
            <Link key="/about" href="/about" className="text-sm duration-200 text-zinc-400 hover:text-zinc-200">
              About
            </Link>
        </ul>
      </div>
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text pb-4 font-bold">
        roadmap
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in" />

      <div className="grid grid-cols-3 gap-4 duration-500 bg-white animate-fade-in bg-clip-text pb-4 font-bold">

            {sorted
              .map((roadmap) => (
                <Card key={roadmap.slug}>
                  <Article roadmap={roadmap} views={0} />
                </Card>
              ))}

        </div>
    </div>
  );

}

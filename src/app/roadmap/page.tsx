import { allRoadmaps } from "@/.contentlayer/generated";
import { Card } from "../../components/card";
import { Navigation } from "../../components/nav";
import { Article } from "./article";

export default async function roadmapsPage() {
  const sorted = allRoadmaps
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Roadmap
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-1">
          <div className="grid grid-cols-3 gap-4">
            {sorted
              .map((roadmap) => (
                <Card key={roadmap.slug}>
                  <Article roadmap={roadmap} views={0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

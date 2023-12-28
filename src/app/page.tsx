import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
            <Link key="/roadmap" href="/roadmap" className="text-sm duration-200 text-zinc-400 hover:text-zinc-200">
              Roadmap
            </Link>
            <Link key="/about" href="/about" className="text-sm duration-200 text-zinc-400 hover:text-zinc-200">
              About
            </Link>
        </ul>
      </nav>
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text pb-4 font-bold">
        roadmap
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in" />
    </div>
  );

}

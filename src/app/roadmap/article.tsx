import type { Roadmap } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	roadmap: Roadmap;
	views: number;
};

export const Article: React.FC<Props> = ({roadmap}) => {
	return (
		<Link href={`/roadmap/${roadmap.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{roadmap.date ? (
							<time dateTime={new Date(roadmap.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(roadmap.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{roadmap.title}
				</h2>
			</article>
		</Link>
	);
};

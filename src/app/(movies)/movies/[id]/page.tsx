import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

export default async function MovieDetail({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<div>
			<h3>Movie detail page</h3>
			<div className="my-2">
				<Suspense fallback={<h1>Loading movie info</h1>}>
					<MovieInfo id={id} />
				</Suspense>
			</div>

			<div>
				<Suspense fallback={<h1>Loading movie videos</h1>}>
					<MovieVideos id={id} />
				</Suspense>
			</div>
		</div>
	);
}

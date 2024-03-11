import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

// []: dynamic route
export default async function MovieDetailPage({
    params: { id } }:
    IParams) {
    // 둘다 끝나야 한꺼번에 보이는 문제
    // const [movie, video] = await Promise.all([getMovies(id), getVideos(id)])
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info</h1>}><MovieInfo id={id} /></Suspense>
            <Suspense fallback={<h1>Loading Movie Video</h1>}><MovieVideos id={id} /></Suspense>
        </div>
    )
}

// { params: { id: '1231' }, searchParams: {} }

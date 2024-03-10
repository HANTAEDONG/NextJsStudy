import { Suspense } from "react";
import { API_URL } from "../../../(home)/page"
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovies(id: string) {
//     console.log(`Fetching movies: ${Date.now()}`)
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const response = await fetch(`${API_URL}/${id}`)
//     return response.json();
// }

// async function getVideos(id: string) {
//     console.log(`Fetching videos: ${Date.now()}`)
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     const response = await fetch(`${API_URL}/${id}/videos`)
//     return response.json();
// }

// []: dynamic route
export default async function MovieDetail({
    params: { id } }:
    {
        params: { id: string };
    }) {
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

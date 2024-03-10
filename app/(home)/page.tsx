import Link from "next/link";
import { resolve } from "path";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// severside fetch
export const metadata = {
    title: "Home",
}

async function getMovie() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovie();
    return (
        <div>
            {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    )
}

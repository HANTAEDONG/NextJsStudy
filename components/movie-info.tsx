import { API_URL } from '../app/(home)/page';
import styles from "../app/styles/movie-info.module.css";

export async function getMovies(id: string) {
    console.log(`Fetching movies: ${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}

export default async function MovieInfo({ id }) {
    const movie = await getMovies(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.hompage} target={"_blank"}>HomePage &rarr;</a>
            </div>
        </div>
    )
}

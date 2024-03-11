import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json();
}

export default async function MovieVideos({ id }) {
    const videos = await getVideos(id);
    return (
        <div>
            {videos.map(video => <iframe key={video.id} src='https://youtube.com/embed/${video.key}' title={video.name} />)}
        </div>
    )
}

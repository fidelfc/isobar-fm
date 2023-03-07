export interface AlbumServiceHTTPResponse {
    name: string;
    image: string;
    releaseDate: string;
    band: string;
    id: string;
    tracks: Tracks[]
}

interface Tracks {
    name: string;
    id: string;
    duration: number
}
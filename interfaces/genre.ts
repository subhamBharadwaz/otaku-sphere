export interface GenreAnimes {
  genreName: string;
  animes: Anime[];
  totalPages: number;
  hasNextPage: boolean;
  currentPage: number;
}

interface Anime {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating?: string;
  episodes: Episodes;
}

interface Episodes {
  sub: number;
  dub?: number;
}

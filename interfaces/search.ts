export interface SearchedAnimes {
  animes: Anime[];
  mostPopularAnimes: MostPopularAnime[];
  currentPage: number;
  hasNextPage: boolean;
  totalPages: number;
}

interface MostPopularAnime {
  id: string;
  name: string;
  poster: string;
  jname: string;
  episodes: Episodes2;
  type: string;
}

interface Episodes2 {
  sub: number;
  dub: number;
}

export interface Anime {
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

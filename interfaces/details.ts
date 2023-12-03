export interface AnimeDetails {
  anime: Anime;
  seasons: any[];
  mostPopularAnimes: MostPopularAnime[];
  relatedAnimes: RelatedAnime[];
  recommendedAnimes: RecommendedAnime[];
}

export interface RecommendedAnime {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating?: string;
  episodes: Episodes2;
}

export interface RelatedAnime {
  id: string;
  name: string;
  poster: string;
  jname: string;
  episodes: Episodes2;
  type: string;
}

export interface Episodes2 {
  sub: number;
  dub?: number;
}

export interface MostPopularAnime {
  id: string;
  name: string;
  poster: string;
  jname: string;
  episodes: Episodes;
  type: string;
}

export interface Anime {
  info: Info;
  moreInfo: MoreInfo;
}

export interface MoreInfo {
  japanese: string;
  synonyms: string;
  aired: string;
  premiered: string;
  duration: string;
  status: string;
  malscore: string;
  genres: string[];
  studios: string;
  producers: string[];
}

export interface Info {
  id: string;
  name: string;
  poster: string;
  description: string;
  stats: Stats;
}

export interface Stats {
  rating: string;
  quality: string;
  episodes: Episodes;
  type: string;
  duration: string;
}

export interface Episodes {
  sub: number;
  dub: number;
}

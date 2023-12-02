export interface Anime {
  spotlightAnimes: SpotlightAnime[];
  trendingAnimes: TrendingAnime[];
  latestEpisodeAnimes: LatestEpisodeAnime[];
  topUpcomingAnimes: TopUpcomingAnime[];
  top10Animes: Top10Animes;
  topAiringAnimes: TopAiringAnime[];
  genres: string[];
}

export interface TopAiringAnime {
  id: string;
  name: string;
  jname: string;
  poster: string;
  otherInfo: string[];
}

export interface Top10Animes {
  today: Today[];
  week: Today[];
  month: Today[];
}

export interface Today {
  id: string;
  rank: number;
  name: string;
  poster: string;
  episodes: Episodes;
}

export interface TopUpcomingAnime {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating?: string;
  episodes: Episodes2;
}

export interface Episodes2 {
  sub?: any;
  dub?: any;
}

export interface LatestEpisodeAnime {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating?: string;
  episodes: Episodes;
}

export interface TrendingAnime {
  rank: number;
  name: string;
  id: string;
  poster: string;
}

export interface SpotlightAnime {
  rank: number;
  id: string;
  name: string;
  description: string;
  poster: string;
  jname: string;
  episodes: Episodes;
  otherInfo: string[];
}

export interface Episodes {
  sub: number;
  dub?: number;
}

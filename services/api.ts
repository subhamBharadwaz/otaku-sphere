import { Anime } from '@/interfaces/anime';
import { AnimeDetails } from '@/interfaces/details';
import { GenreAnimes } from '@/interfaces/genre';
import { SearchedAnimes } from '@/interfaces/search';

const baseURL = 'https://api-aniwatch.onrender.com/anime';

export const getAnimes = async (): Promise<Anime> => {
  const response = await fetch(`${baseURL}/home`);
  const json = await response.json();

  return json;
};

export const getAnimeInfo = async (id: string): Promise<AnimeDetails> => {
  const response = await fetch(`${baseURL}/info?id=${id}`);
  const json = await response.json();

  return json;
};

export const getAnimesByGenre = async (genre: string, page: number): Promise<GenreAnimes> => {
  const response = await fetch(`${baseURL}/genre/${genre}?page=${page || 1}`);
  const json = await response.json();

  return json;
};

export const getSearchedAnimes = async (term: string, page: number): Promise<SearchedAnimes> => {
  const response = await fetch(`${baseURL}/search?q=${term}&page=${page || 1}`);
  const json = await response.json();

  return json;
};

import { Anime } from '@/interfaces/anime';
import { AnimeDetails } from '@/interfaces/details';

export const getAnimes = async (): Promise<Anime> => {
  const response = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
  const json = await response.json();

  return json;
};

export const getAnimeInfo = async (id: string): Promise<AnimeDetails> => {
  const response = await fetch(`https://api-aniwatch.onrender.com/anime/info?id=${id}`);
  const json = await response.json();

  return json;
};

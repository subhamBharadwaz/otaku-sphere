import { Anime } from '@/interfaces/anime';

export const getAnimes = async (): Promise<Anime> => {
  const response = await fetch(`https://api-aniwatch.onrender.com/anime/home`);
  const json = await response.json();

  return json;
};

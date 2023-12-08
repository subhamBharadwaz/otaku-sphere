import { FavoriteAnime } from '@/interfaces/favorite';
import { create } from 'zustand';
import { supabase } from '@/utils/supabase';

interface FavoritesStore {
  favorites: {
    anime_id: string;
    user_id: string;
    poster: string;
    link: string;
    name: string;
  }[];
  toggleFavorite: (id: string, poster: string, link: string, name: string, user_id: string) => void;
  loadInitialFavorites: () => Promise<void>;
}

const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  toggleFavorite: (id, poster, link, name, user_id) =>
    set((state) => {
      const existingFavoriteIndex = state.favorites.findIndex((f) => f.anime_id === id);

      if (existingFavoriteIndex !== -1) {
        // Anime is already favorited, remove it
        const updatedFavorites = [...state.favorites];
        updatedFavorites.splice(existingFavoriteIndex, 1);
        return { favorites: updatedFavorites };
      } else {
        // Anime is not favorited, insert it
        const newFavorite = { anime_id: id, user_id, poster, link, name };
        return { favorites: [...state.favorites, newFavorite] };
      }
    }),
  loadInitialFavorites: async () => {
    try {
      const { data, error } = await supabase
        .from('favorite_animes')
        .select(`id,anime_id,user_id,poster,name,link`);

      if (error) {
        console.error('Error fetching initial favorites:', error.message);
        return;
      }

      if (data) {
        set({ favorites: data });
      }
    } catch (error) {
      console.error('Error fetching initial favorites:', error);
    }
  },
}));

export default useFavoritesStore;

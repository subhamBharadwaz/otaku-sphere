import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

interface AuthStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));

export default useAuthStore;

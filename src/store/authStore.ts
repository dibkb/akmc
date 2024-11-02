import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserInfo {
  email: string;
  id: number;
  profilePic: string;
}
interface AuthState {
  jwtAccessToken: string | null;
  setJwtAccessToken: (token: string | null) => void;
  userInfo: UserInfo | null;
  setUserInfo: (user: UserInfo) => void;
  clearTokens: () => void;
  isAuthenticated: () => boolean;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      jwtAccessToken: null,
      setJwtAccessToken: (token: string | null) =>
        set({ jwtAccessToken: token }),
      userInfo: null,
      setUserInfo: (token: UserInfo) => set({ userInfo: token }),
      clearTokens: () => set({ jwtAccessToken: null, userInfo: null }),
      isAuthenticated: () => {
        const state = get();
        return !!state.jwtAccessToken && !!state.userInfo?.id;
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;

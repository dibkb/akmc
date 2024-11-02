import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserInfo {
  email: string;
  id?: number;
  profilePic?: string;
}
interface AuthState {
  jwtAccessToken: string | null;
  setJwtAccessToken: (token: string | null) => void;
  userInfo: UserInfo | null;
  setUserInfo: (user: UserInfo) => void;
  clearTokens: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      jwtAccessToken: null,
      setJwtAccessToken: (token: string | null) =>
        set({ jwtAccessToken: token }),
      userInfo: null,
      setUserInfo: (token: UserInfo) => set({ userInfo: token }),
      clearTokens: () => set({ jwtAccessToken: null, userInfo: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;

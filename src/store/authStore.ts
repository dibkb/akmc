import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Chat {
  role: "user" | "system";
  message: string;
  rephrased?: string;
}
interface AuthState {
  chats: Chat[] | null;
  setChats: (mess: Chat) => void;
  input: string;
  setInput: (i: string) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
  clearAll: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      loading: false,
      setLoading: (c: boolean) =>
        set(() => ({
          loading: c,
        })),
      chats: null,
      setChats: (mess: Chat) =>
        set((state) => ({
          chats: state.chats ? [...state.chats, mess] : [mess],
        })),
      input: "",
      setInput: (i: string) =>
        set(() => ({
          input: i,
        })),
      clearAll: () =>
        set(() => ({
          chats: null,
          loading: false,
          input: "",
        })),
    }),
    {
      name: "akmc-chat",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;

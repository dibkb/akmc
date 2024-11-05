import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Chat {
  role: "user" | "system";
  message: string;
}
interface AuthState {
  chats: Chat[] | null;
  setChats: (mess: Chat) => void;
  input: string;
  setInput: (i: string) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "akmc-chat",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;

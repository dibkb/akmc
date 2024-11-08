import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Chat {
  role: "user" | "system";
  message: string;
  rephrased?: string;
}
export interface DescriptionResponse {
  Operating_System: string;
  Software_Component: string;
  Version: string;
  Impact: string;
  Affected_Hardware: string;
  Network_Requirements: string;
  Affected_Protocols: string;
  Authentication_Required: string;
  Privileges_Required: string;
  User_Interaction_Required: string;
  Vendor: string;
}
export interface DescriptionChat {
  role: "user" | "system";
  messageUser?: string;
  description?: DescriptionResponse;
}
interface AuthState {
  chats: Chat[] | null;
  description: DescriptionChat[] | null;
  setDescription: (des: DescriptionChat) => void;
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
      description: null,
      setDescription: (desc: DescriptionChat) =>
        set((state) => ({
          description: state.description
            ? [...state.description, desc]
            : [desc],
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
          description: null,
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

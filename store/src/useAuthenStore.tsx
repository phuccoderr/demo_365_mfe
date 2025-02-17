import { create } from "zustand";

type ModalState = {
  token: string;
};

interface ModalAction extends ModalState {
  setToken: (token: string) => void;
}

const useAuthenStore = create<ModalAction>((set) => ({
  token: "",
  setToken: (token) => set(() => ({ token })),
}));

export default useAuthenStore;

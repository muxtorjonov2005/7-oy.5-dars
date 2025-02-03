import {create} from 'zustand'

const useUserAuth = create((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null })
}));

export default useUserAuth;
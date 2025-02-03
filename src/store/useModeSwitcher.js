import {create} from 'zustand';

const useModeSwitcher = create((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return { theme: newTheme };
  }),
  initializeTheme: () => set(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    return { theme: savedTheme };
  })
}));

export default useModeSwitcher

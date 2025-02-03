import { create } from 'zustand';

const useLanguage = create((set) => ({
  language: 'uz', 
  setLanguage: (lang) => set({ language: lang })
}));

export default useLanguage;

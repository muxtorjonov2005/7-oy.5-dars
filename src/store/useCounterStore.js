import {create } from 'zustand'

const useCounterStore = create((set) => ({
    counter: 0,
    theme: 'light',
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })), 
    onChange: () => set((state) => ({theme: state.theme == 'dark' ? 'light' : 'dark'})) 
}))

export default useCounterStore
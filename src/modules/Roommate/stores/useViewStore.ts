import { create } from 'zustand'

interface ViewStore {
	activeView: string
	setActiveView: (tab: string) => void
}

export const useViewStore = create<ViewStore>(set => ({
	activeView: 'list',
	setActiveView: tab => set({ activeView: tab }),
}))

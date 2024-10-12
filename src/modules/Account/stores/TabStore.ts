// src/store/useTabStore.ts
import { create } from 'zustand'

interface TabStore {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export const useTabStore = create<TabStore>(set => ({
	activeTab: 'active',

	setActiveTab: tab => set({ activeTab: tab }),
}))

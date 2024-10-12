import { roommates } from '@/modules/Roommate/data'
import { create } from 'zustand'

interface RoommateState {
	place: any | null
	loading: boolean
	setPlaceById: (id: string) => void
}

export const useRoommateStore = create<RoommateState>(set => ({
	place: null,
	loading: true,
	setPlaceById: (id: string) => {
		const foundPlace = roommates.find(p => p._id == id)
		set({ place: foundPlace, loading: false })
	},
}))

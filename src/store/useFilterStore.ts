import { create } from 'zustand'

interface QueryDebounce {
	debouncedQuery: string
	setDebouncedQuery: (query: string) => void
}

export const filterStore = create<QueryDebounce>((set) => ({
	debouncedQuery: '',
	setDebouncedQuery: (query) => set({ debouncedQuery: query })
}))

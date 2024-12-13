import { create } from 'zustand'

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Counts {
	count: number
	increase: () => void
	decrease: () => void
	username?: string
	changeUser: (username: string) => void
	githubUser: any
	fetchDataGithub: (username: string) => Promise<void>
}
// interface GitHubUser {
// 	login?: string
// 	id?: number
// 	avatar_url?: string
// 	html_url?: string
// 	name?: string
// 	company?: string
// 	blog?: string
// 	location?: string
// 	email?: string
// 	bio?: string
// }
const useAppStore = create<Counts>((set) => ({
	count: 0,
	increase: () =>
		set((state) => ({
			count: state.count + 1
		})),
	decrease: () =>
		set((state) => ({
			count: state.count - 1
		})),
	username: 'jokowi',
	changeUser: (newUsername) => set({ username: newUsername }),
	githubUser: 'rell',
	fetchDataGithub: async (name) => {
		try {
			const response = await fetch(`https://api.github.com/users/${name}`)
			const data = await response.json()
			console.log('Data yang diterima:', data)
		} catch (error) {
			console.error('Error fetching data from GitHub:', error)
			throw error
		}
	}
}))

export default useAppStore

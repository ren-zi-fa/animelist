'use client'

import {
	isServer,
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000
			}
		}
	})
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) browserQueryClient = makeQueryClient()
		return browserQueryClient
	}
}

export function QueryProvider({ children }: PropsWithChildren) {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient} >
			{children}
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	)
}

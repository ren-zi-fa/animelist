// import { useMemo, useEffect } from 'react'

// const debounce = require('lodash.debounce')
// export const useDebouncedInput = (
// 	callback: (value: string) => void,
// 	delay: number
// ) => {
// 	const debouncedFn = useMemo(
// 		() =>
// 			debounce((value: string) => {
// 				callback(value)
// 			}, delay),
// 		[callback, delay]
// 	)

// 	useEffect(() => {
// 		return () => {
// 			debouncedFn.cancel()
// 		}
// 	}, [debouncedFn])

// 	return debouncedFn
// }

import axios from 'axios'
export const AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	timeout: 1000
	// headers: {'X-Custom-Header': 'foobar'}
})

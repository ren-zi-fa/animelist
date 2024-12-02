/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.myanimelist.net'
			}
		]
	}
}

export default nextConfig

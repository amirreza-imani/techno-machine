import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';
const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: isDev ? 'http' : 'https',
				hostname: process.env.NEXT_PUBLIC_STRAPI_URL || 'localhost',
				pathname: '/uploads/**',
			},
		],
		dangerouslyAllowLocalIP: isDev,
	},
};

export default nextConfig;

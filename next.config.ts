import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.technomachineco.ir',
				pathname: '/uploads/**',
			},
		],
	},
};

export default nextConfig;

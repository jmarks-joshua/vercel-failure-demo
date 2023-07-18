/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

const nextConfig = {
	experimental: {
		serverActions: true,
	},
	env: {
		GIT_USERNAME: process.env.GIT_USERNAME,
		GIT_REPO: process.env.GIT_REPO,
		GIT_BRANCH: process.env.GIT_BRANCH,
		GIT_ACCESS_TOKEN: process.env.GIT_ACCESS_TOKEN,
		EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
		EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
		MAIL_SERVER: process.env.MAIL_SERVER,
		EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
		EMAIL_PROTOCOL: process.env.EMAIL_PROTOCOL,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		GOTENBERG_URL: process.env.GOTENBERG_URL,
	},
	webpack: (config) => {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		}
		config.resolve.fallback = {
			process: require.resolve('process/browser'),
			zlib: require.resolve('browserify-zlib'),
			stream: require.resolve('stream-browserify'),
			util: require.resolve('util'),
			buffer: require.resolve('buffer'),
			asset: require.resolve('assert'),
		}
		config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' })
		config.plugins.push(
			new webpack.ProvidePlugin({
			  Buffer: ['buffer', 'Buffer'],
			  process: 'process/browser',
			}),
			new webpack.DefinePlugin({
				'process.versions': JSON.stringify(process.versions),
			  })
		)
		return config
	}
}

module.exports = nextConfig

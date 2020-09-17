// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'bridge.',
	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/logo.png',
	},
	siteUrl: 'https://bridge-core.github.io',
	settings: {
		web: process.env.URL_WEB || false,
		twitter: process.env.URL_TWITTER || false,
		github: 'https://github.com/bridge-core/',
		nav: {
			links: [
				{ path: '/editor-docs/', title: 'Editor' },
				{ path: '/plugin-docs/', title: 'Plugins' },
			],
		},
		sidebar: require('./src/sidebars.js'),
	},
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './content',
				path: '**/*.md',
				typeName: 'MarkdownPage',
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: ['noopener', 'noreferrer'],
					plugins: ['@gridsome/remark-prismjs'],
				},
			},
		},

		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js',
				purgeConfig: {
					// Prevent purging of prism classes.
					whitelistPatternsChildren: [/token$/],
				},
			},
		},

		// {
		// 	use: '@gridsome/plugin-google-analytics',
		// 	options: {
		// 		id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
		// 	},
		// },

		{
			use: '@gridsome/plugin-sitemap',
			options: {},
		},

		{
			use: 'gridsome-plugin-pwa',
			options: {
				// Service Worker
				disableServiceWorker: false,
				serviceWorkerPath: 'service-worker.js',
				cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',

				// Manifest
				manifestPath: 'manifest.json',
				title: 'bridge',
				shortName: 'bridge',
				description: 'The IDE for Minecraft Add-Ons',
				scope: '/',
				startUrl: '/',
				display: 'standalone',
				statusBarStyle: 'black-translucent',
				themeColor: '#1778d2',
				backgroundColor: '#ffffff',
				icon: './static/logo.png',
				maskableIcon: true,
			},
		},
	],
}

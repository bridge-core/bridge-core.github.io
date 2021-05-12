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
		web: false,
		discord: 'https://discord.gg/uj8K2S9',
		twitter: 'https://twitter.com/bridgeEditor',
		github: 'https://github.com/bridge-core/',
		nav: {
			links: [
				{ path: '/editor-docs/', title: 'Editor' },
				{ path: '/plugin-docs/', title: 'Docs' },
				{ path: '/creations/', title: 'Creations' },
				{ path: '/created-plugins/', title: 'Plugins' },
			],
		},
		sidebar: require('./src/sidebars.js'),
	},
	plugins: [
		// {
		// 	use: '@gridsome/plugin-critical',
		// 	options: {
		// 		paths: ['/'],
		// 		width: 1300,
		// 		height: 900,
		// 	},
		// },
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './content/creations',
				path: '**/*.md',
				typeName: 'Creation',
				refs: {
					author: 'Author',
					tags: {
						typeName: 'Tag',
						create: true,
					},
				},
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: ['noopener', 'noreferrer'],
					plugins: ['@gridsome/remark-prismjs'],
				},
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './content/authors',
				pathPrefix: 'author/',
				path: '**/*.md',
				typeName: 'Author',
				remark: {
					externalLinksTarget: '_blank',
					externalLinksRel: ['noopener', 'noreferrer'],
					plugins: ['@gridsome/remark-prismjs'],
				},
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				baseDir: './content/docs',
				pathPrefix: '',
				path: '**/*.md',
				typeName: 'MarkdownPage',
				refs: {
					author: 'Author',
				},
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

		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
			},
		},

		{
			use: '@gridsome/plugin-sitemap',
			options: {},
		},

		// {
		// 	use: 'gridsome-plugin-pwa',
		// 	options: {
		// 		// Service Worker
		// 		disableServiceWorker: false,
		// 		serviceWorkerPath: 'service-worker.js',
		// 		cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',

		// 		// Manifest
		// 		manifestPath: 'manifest.json',
		// 		title: 'bridge',
		// 		shortName: 'bridge',
		// 		description: 'The IDE for Minecraft Add-Ons',
		// 		scope: '/',
		// 		startUrl: '/',
		// 		display: 'standalone',
		// 		statusBarStyle: 'default',
		// 		themeColor: '#1778d2',
		// 		backgroundColor: '#ffffff',
		// 		icon: './static/touch-icon.png',
		// 		maskableIcon: true,
		// 	},
		// },
	],
	templates: {
		Tag: [
			{
				path: '/tags/:title',
				component: '~/templates/Tag.vue',
			},
		],
	},
}

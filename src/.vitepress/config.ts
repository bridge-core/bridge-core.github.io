import { defineConfig } from 'vitepress'

const nav = [
	{
		text: 'Editor',
		activeMatch: `^/docs/editor/`,
		link: '/docs/editor-docs/',
	},
	{
		text: 'Extensions',
		activeMatch: `^/extensions/`,
		link: '/docs/extension-docs/',
	},
	{
		text: 'About',
		activeMatch: `^/about/`,
		items: [
			{ text: 'Team', link: '/about/team' },
			{ text: 'Releases', link: '/about/releases' },
			{
				text: 'Contribution Guide',
				link: '/about/contribution-guide',
			},
			{ text: 'Code of Conduct', link: '/about/coc' },
		],
	},
]

const sidebar = {
	'/docs/editor-docs/': [
		{
			text: 'Editor',
			link: '/docs/editor-docs/',
		},
		{
			text: 'Features',
			link: '/docs/editor-docs/features',
		},
		{
			text: 'Getting Started',
			link: '/docs/editor-docs/getting-started/',
		},
		{
			text: 'bridge. v2 Migration',
			link: '/docs/editor-docs/migration-guide/',
		},
		{
			text: 'FAQ',
			link: '/docs/editor-docs/faq/',
		},
	],
}

export default defineConfig({
	title: 'bridge.',
	description: '',

	markdown: {},

	themeConfig: {
		repo: 'bridge-core/editor',
		docsDir: 'src',

		editLinks: false,
		lastUpdated: false,

		nav,
		sidebar,
	},
})

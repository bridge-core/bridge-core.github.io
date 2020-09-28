// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fetch = require('node-fetch')
const GitHub = require('github-api')
const uuid = require('uuid').v4

module.exports = function(api) {
	api.loadSource(
		async ({
			addCollection,
			addMetadata,
			store,
			addReference,
			getCollection,
		}) => {
			// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
			addMetadata('settings', require('./gridsome.config').settings)

			const gh = new GitHub({
				token: process.env.GITHUB_TOKEN,
			})

			const bridgeRepo = gh.getRepo('bridge-core', 'bridge.')
			const pluginRepo = gh.getRepo('bridge-core', 'plugins')

			const contributorData = (await bridgeRepo.getContributors()).data.concat(
				(await pluginRepo.getContributors()).data
			)

			const filteredContributors = []
			contributorData.forEach(d => {
				if (
					!filteredContributors.find(({ login }) => d.login === login)
				)
					filteredContributors.push(d)
			})

			const contributors = addCollection({
				typeName: 'Contributor',
			})
			filteredContributors.forEach(
				({ id, html_url, avatar_url, login, type }) =>
					contributors.addNode({
						id,
						type,
						title: login,
						path: html_url,
						image: avatar_url,
					})
			)

			const plugins = addCollection({
				typeName: 'Plugin',
			})
			const tagCollection = getCollection('Tag')
			const authorCollection = getCollection('Author')
			;(await pluginRepo.getContents(
				'master',
				'plugins.json',
				true
			)).data.forEach(({ author, tags, ...other }) => {
				tags.forEach(
					t =>
						tagCollection.findNode({
							title: t.toLowerCase(),
						}) ||
						tagCollection.addNode({
							title: t.toLowerCase(),
							id: t.toLowerCase(),
						})
				)
				const contributor =
					authorCollection.findNode({
						id: author.replace(/\s+/g, '').toLowerCase(),
					}) ||
					contributors.findNode({
						title: author.replace(/\s+/g, ''),
					}) ||
					contributors.addNode({
						title: author,
						image: `https://robohash.org/${author}`,
					})

				plugins.addNode({
					...other,
					author: store.createReference(contributor),
					tags: store.createReference(
						'Tag',
						tags.map(t => t.toLowerCase())
					),
				})
			})
		}
	)

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}

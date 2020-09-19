// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fetch = require('node-fetch')

module.exports = function(api) {
	api.loadSource(async ({ addCollection, addMetadata }) => {
		// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
		addMetadata('settings', require('./gridsome.config').settings)

		const contributorData = await (await fetch(
			'https://api.github.com/repos/bridge-core/bridge./contributors'
		)).json()
		const contributors = addCollection({
			typeName: 'Contributor',
		})

		for (let contributor of contributorData) {
			contributors.addNode(contributor)
		}
	})

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}

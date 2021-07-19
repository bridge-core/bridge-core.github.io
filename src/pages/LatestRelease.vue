<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<div v-html="latestRelease.content"></div>
		</div>
	</Layout>
</template>

<static-query>
query {
	allRelease(sortBy: "id", order: DESC) {
		edges {
			node {
				name
				html_url
				tag_name
				draft
				prerelease
				content
			}
		}
	}
}
</static-query>

<script>
import { ExternalLinkIcon } from 'vue-feather-icons'

export default {
	components: {
		ExternalLinkIcon,
	},
	computed: {
		latestRelease() {
			for (let release of this.$static.allRelease.edges) {
				// Check release isn't a draft or prerelease
				if (release.node.draft || release.node.prerelease) continue

				// Return the valid release
				return {
					name: release.node.name,
					url: release.node.html_url,
					content: release.node.content,
				}
			}
		},
	},
}
</script>

<style>
ul {
	list-style: unset;
	padding-left: 2rem;
}
ol {
	list-style: upper-latin;
	padding-left: 2rem;
}
pre {
	padding: 1rem;
}
</style>

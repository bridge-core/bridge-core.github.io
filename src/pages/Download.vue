<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>Download {{ latestRelease.name }}</h1>

			<div v-html="latestRelease.content"></div>

			<div v-if="downloadForOs" class="flex mt-8 flex-wrap -mx-4">
				<g-link
					:to="downloadForOs"
					class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2"
				>
					Download
					<DownloadCloudIcon class="ml-4" size="1x" />
				</g-link>
			</div>

			<p v-else>bridge. is not available for your platform.</p>
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
				assets {
					name
					browser_download_url
					state
					size
				}
			}
		}
	}
}
</static-query>

<script>
import { DownloadCloudIcon } from 'vue-feather-icons'

export default {
	components: {
		DownloadCloudIcon,
	},
	computed: {
		latestRelease() {
			for (let release of this.$static.allRelease.edges) {
				// Check release isn't a draft or prerelease
				if (release.node.draft || release.node.prerelease) continue

				let winAsset, linuxAsset, macAsset
				release.node.assets.forEach(asset => {
					if (asset.state !== 'uploaded') return

					// Determine file extension
					let parts = asset.name.split('.')
					let ext = parts[parts.length - 1]

					if (ext === 'exe') winAsset = asset
					else if (ext === 'AppImage') linuxAsset = asset
					else if (ext === 'dmg') macAsset = asset
				})

				// Check the assets for this release are uploaded, otherwise skip this release
				if (
					winAsset === undefined ||
					linuxAsset === undefined ||
					macAsset === undefined
				)
					continue

				// Return the valid release
				return {
					name: release.node.name,
					url: release.node.html_url,
					winAsset,
					linuxAsset,
					macAsset,
					content: release.node.content,
				}
			}
		},
		downloadForOs() {
			if (process.isServer)
				return 'https://github.com/bridge-core/bridge./releases/latest'
			if (navigator.platform.includes('Win'))
				return this.latestRelease.winAsset.browser_download_url
			else if (navigator.platform.includes('Mac'))
				return this.latestRelease.macAsset.browser_download_url
			else if (navigator.platform.includes('Linux'))
				return this.latestRelease.linuxAsset.browser_download_url
		},
	},
}
</script>

<style>
ul {
	list-style: unset;
	padding-left: 2rem;
}
</style>

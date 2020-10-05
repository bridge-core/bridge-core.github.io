<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>Download</h1>
			<div>{{ latestRelease }}</div>
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
export default {
	computed: {
		latestRelease() {
			for (let release of this.$static.allRelease.edges) {
				// Check release isn't a draft or prerelease
				if (release.node.draft || release.node.prerelease) continue

				let winAsset, linuxAsset, macAsset
				release.node.assets.forEach((asset) => {
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
				}
			}
		},
	},
}
</script>

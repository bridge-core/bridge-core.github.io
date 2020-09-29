<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>{{ plugin.title }}</h1>
			<div class="pb-2">
				<g-link
					v-for="tag in plugin.tags"
					:key="tag.id"
					:to="tag.path"
					class="inline-block bg-ui-sidebar rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1"
				>
					#{{ tag.title }}
				</g-link>
			</div>
			<AuthorTag
				class="mb-4"
				style="width: fit-content;"
				:author="author"
			/>
			<g-image v-if="plugin.image" class="mb-8" :src="plugin.image" />

			<div
				v-if="!plugin.content"
				class="content"
				v-text="plugin.excerpt"
			/>
			<div v-else class="content" v-html="plugin.content" />

			<div class="flex mt-8 pt-4 border-t border-ui-border">
				<g-link
					:to="
						`https://github.com/bridge-core/plugins/raw/master${
							plugin.link
						}`
					"
					class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-white rounded-lg shadow-lg bg-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
					:style="
						`background: ${author.themeColor ||
							'var(--color-ui-primary)'};`
					"
				>
					Download
					<DownloadCloudIcon class="ml-4" size="1x" />
				</g-link>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
    plugin(id: $id) {
        id
        title: name
		excerpt: description
		link
		content
        author {
            ... on Author {
				themeColor
				title
				image
				position
				path
			}
			... on Contributor {
				title
				altImage: image
				path
			}
        }
		tags {
			id
			path
			title
		}
    }
}
</page-query>

<script>
import { DownloadCloudIcon } from 'vue-feather-icons'
export default {
	components: {
		DownloadCloudIcon,
	},
	computed: {
		plugin() {
			return this.$page.plugin
		},
		author() {
			return this.plugin.author
		},
	},
}
</script>

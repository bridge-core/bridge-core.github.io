<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>{{ creation.title }}</h1>
			<AuthorTag
				class="mb-4"
				style="width: fit-content;"
				:author="author"
			/>
			<g-image class="mb-8" :src="creation.image" />

			<div class="content" v-html="creation.content" />

			<div class="flex mt-8 pt-4 border-t border-ui-border">
				<g-link
					:to="creation.download"
					class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
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
    creation(id: $id) {
        id
        title
        image
        content
        download
        author {
            path
            title
            image
            position
            themeColor
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
		creation() {
			return this.$page.creation
		},
		author() {
			return this.creation.author
		},
	},
}
</script>

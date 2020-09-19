<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>{{ creation.title }}</h1>
			<ContentAuthor :author="author" />

			<div class="content" v-html="creation.content" />

			<!-- <a
					:href="githubLink"
					class="inline-block mt-8 mb-4 lg:mt-12 lg:mb-6 text-ui-primary"
					target="_blank"
					rel="noopener noreferrer"
					title="Edit on GitHub"
					name="Edit on GitHub"
				>
					<GithubIcon class="inline mr-1" size="1.0x" />
					<span class="border-b border-dashed border-ui-primary pr-1">
						Edit this page on GitHub
					</span>
				</a> -->
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
    creation(id: $id) {
        id
        title
        content
        author {
            id
            title
            image
            position
        }
    }
}
</page-query>

<script>
export default {
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

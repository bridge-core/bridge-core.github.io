<template>
	<Layout>
		<div class="flex flex-wrap items-start justify-start">
			<div
				class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
				style="top: 4rem"
			>
				<OnThisPage />
			</div>

			<div class="order-1 w-full md:w-2/3">
				<div class="content" v-html="$page.markdownPage.content" />

				<div
					class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border"
				>
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/OnThisPage.vue'
import NextPrevLinks from '@/components/NextPrevLinks.vue'

export default {
	components: {
		OnThisPage,
		NextPrevLinks,
	},

	metaInfo() {
		const title = this.$page.markdownPage.title
		const description =
			this.$page.markdownPage.description ||
			this.$page.markdownPage.excerpt ||
			'bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior and resource packs (JavaScript, JSON and functions) and provides a powerful work environment. Unleash the full power of add-ons with bridge. plugins and make use of rich auto-completions provided as you navigate through a file. Creating Minecraft add-ons was never more convenient!'

		return {
			title: title,
			meta: [
				{
					name: 'description',
					content: description,
				},
				{
					key: 'og:title',
					name: 'og:title',
					content: title + ' - bridge.',
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title + ' - bridge.',
				},
				{
					key: 'og:description',
					name: 'og:description',
					content: description,
				},
				{
					key: 'twitter:description',
					name: 'twitter:description',
					content: description,
				},
			],
		}
	},
}
</script>

<style>
@import 'prism-themes/themes/prism-material-light.css';

pre,
code {
	background: var(--color-ui-sidebar) !important;
	color: var(--color-ui-typo) !important;
}
</style>

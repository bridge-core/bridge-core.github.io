<template>
	<component
		:is="path ? 'g-link' : 'span'"
		:to="path"
		class="flex items-center p-2 rounded-lg transition-all duration-200 ease-out transform"
		:class="{
			'hover:shadow-md hover:-translate-y-1': path,
			'author-tag': !card && path,
			'author-tag-card': card && path,
		}"
	>
		<g-image
			class="w-8 h-8 rounded-full mr-4"
			:src="image"
			:alt="`Logo of ${title}`"
		/>

		<div class="text-sm">
			<p class="leading-none mb-0">
				{{ title }}
			</p>
			<p class="text-xs opacity-75 mb-0">
				{{ position }}
			</p>
		</div>
	</component>
</template>

<script>
export default {
	name: 'AuthorTag',
	props: {
		author: Object,
		card: Boolean,
	},
	computed: {
		path() {
			return this.author.path
		},
		image() {
			return this.author.image
		},
		title() {
			return this.author.title
		},
		position() {
			return this.author.position
		},
	},
}
</script>

<style scoped>
.author-tag:hover {
	background: var(--color-ui-sidebar);
}
.author-tag-card:hover {
	background: var(--color-ui-background);
}
</style>

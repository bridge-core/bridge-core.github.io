<template>
	<g-link
		:to="path"
		:class="
			`flex items-center p-2 rounded-lg transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1 hover:${
				!card ? 'bg-ui-sidebar' : 'bg-ui-background'
			}`
		"
		style="width: fit-content;"
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
	</g-link>
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

<style></style>

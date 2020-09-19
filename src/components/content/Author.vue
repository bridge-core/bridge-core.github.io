<template>
	<div class="flex items-center">
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
	</div>
</template>

<script>
export default {
	name: 'Author',
	props: {
		author: Object,
	},
	computed: {
		id() {
			return this.author.id
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

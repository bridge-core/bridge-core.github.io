<template>
	<div>
		<div
			class="h-full w-full bg-ui-sidebar rounded overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
		>
			<g-link :to="to">
				<g-image
					class="w-full"
					:src="image"
					:alt="`Image of ${title}`"
				/>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{{ title }}</div>
					<AuthorTag :author="author" :card="true" />
					<p class="text-base mt-4">
						{{ excerpt }}
					</p>
				</div>
			</g-link>
			<div class="px-6 pt-4 pb-2">
				<g-link
					v-for="tag in tags"
					:key="tag.id"
					:to="tag.path"
					class="inline-block bg-ui-background rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1"
				>
					#{{ tag.title }}
				</g-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		to: String,
		image: [String, Object],
		title: String,
		excerpt: String,
		date: String,
		tags: Array,
		author: Object,
	},
}
</script>

<style></style>

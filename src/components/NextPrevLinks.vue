<template>
	<div>
		<div class="flex flex-col sm:flex-row justify-between items-center">
			<g-link
				v-if="prev"
				:to="prev.path"
				class="mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
			>
				<ArrowLeftIcon class="mr-2" size="1x" />
				{{ prev.title }}
			</g-link>

			<g-link
				v-if="next"
				:to="next.path"
				class="flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
			>
				{{ next.title }}
				<ArrowRightIcon class="ml-2" size="1x" />
			</g-link>
		</div>
	</div>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons'
import Sidebars from '../sidebars.js'

function findPageArray(pagePath) {
	console.log(Sidebars)
	for (let sidebar of Sidebars) {
		for (let section of sidebar.sections) {
			const index = section.items.indexOf(pagePath)
			if (index !== -1) return { items: section.items, index }
		}
	}
	return { items: [], index: -1 }
}
function findNext(pagePath) {
	const { items, index } = findPageArray(pagePath)
	if (index === -1 || index === items.length - 1) return
	return items[index + 1]
}
function findPrev(pagePath) {
	const { items, index } = findPageArray(pagePath)
	if (index === -1 || index === 0) return
	return items[index - 1]
}

export default {
	components: {
		ArrowLeftIcon,
		ArrowRightIcon,
	},

	computed: {
		page() {
			return this.$page.markdownPage
		},
		pages() {
			return this.$page.allMarkdownPage.edges.map(edge => edge.node)
		},
		next() {
			let next = this.page.next || findNext(this.page.path)
			console.log(this.pages, this.page, next)
			if (this.pages && !next) {
				return false
			}

			return this.pages.find(page => page.path === next)
		},
		prev() {
			let prev = this.page.prev || findPrev(this.page.path)
			if (this.pages && !prev) {
				return false
			}

			return this.pages.find(page => page.path === prev)
		},
	},
}
</script>

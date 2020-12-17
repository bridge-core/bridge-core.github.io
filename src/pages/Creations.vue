<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>Creations</h1>
			<p>
				bridge. has been used to create various awesome projects. Here
				are some of our favorites...
			</p>
			<div class="mt-12 -mx-2 flex flex-wrap">
				<Card
					class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
					v-for="{
						node: {
							id,
							image,
							path,
							title,
							excerpt,
							tags,
							author,
							developer,
						},
					} in edges"
					:key="id"
					:to="path"
					:image="image"
					:title="title"
					:developer="developer"
					:excerpt="excerpt"
					:tags="tags"
					:author="author"
				/>
			</div>
			<Pager
				linkClass="pager__link"
				class="pager text-xl"
				:info="$page.allCreation.pageInfo"
			/>
		</div>
	</Layout>
</template>

<page-query>
query($page: Int) {
	allCreation(perPage: 12, page: $page) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				path   
				title
				image
				developer
				excerpt
				author {
					title
					image
					position
				}
				tags {
					id
					path
					title
				}
			}
		}
	}
}
</page-query>

<script>
import Card from '../components/content/Card.vue'
import { Pager } from 'gridsome'

export default {
	components: {
		Card,
		Pager,
	},
	computed: {
		edges() {
			return this.$page.allCreation.edges
		},
	},
}
</script>

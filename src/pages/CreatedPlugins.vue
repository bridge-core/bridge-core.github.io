<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>Plugins</h1>
			<p>
				bridge. has a powerful plugin API that has been used to create
				amazing extensions for the editor. You can find all officially
				available plugins here!
			</p>
			<div class="mt-12 -mx-2 flex flex-wrap">
				<Card
					class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
					v-for="{
						node: {
							id,
							image,
							image2,
							path,
							title,
							excerpt,
							tags,
							author,
						},
					} in edges"
					:key="id"
					:to="path"
					:image="image || image2"
					:title="title"
					:excerpt="excerpt"
					:tags="tags"
					:author="author"
				/>
			</div>
			<Pager
				linkClass="pager__link"
				class="pager text-xl"
				:info="$page.allPlugin.pageInfo"
			/>
		</div>
	</Layout>
</template>

<page-query>
query($page: Int) {
	allPlugin(perPage: 12, page: $page) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				path   
				title: name
				excerpt: description
				author {
					... on Author {
						title
						image
						position
					}
					... on Contributor {
						title
						altImage: image
					}
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
			return this.$page.allPlugin.edges
		},
	},
}
</script>

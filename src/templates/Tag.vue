<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>#{{ tag.title }}</h1>
			<div class="mt-12 -mx-2 flex flex-wrap">
				<Card
					class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
					v-for="{
						node: { id, image, path, title, excerpt, tags, author },
					} in tag.belongsTo.edges"
					:key="id"
					:to="path"
					:image="image"
					:title="title"
					:excerpt="excerpt"
					:tags="tags"
					:author="author"
				/>
			</div>
			<Pager
				linkClass="pager__link"
				class="pager text-xl"
				:info="tag.belongsTo.pageInfo"
			/>
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!, $page: Int) {
    tag(id: $id) {
        id
        title
		belongsTo(perPage: 20, page: $page) @paginate {
			pageInfo {
				totalPages
				currentPage
			}
        	edges {
				node {
					... on Creation {
                		id
                		title
						image
						excerpt
						path
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
    }
}
</page-query>

<script>
import Card from '~/components/content/Card.vue'
import { Pager } from 'gridsome'

export default {
	components: {
		Card,
		Pager,
	},
	computed: {
		tag() {
			return this.$page.tag
		},
	},
}
</script>

<style lang="scss">
.pager {
	display: inline-block;
	width: 100%;
	text-align: center;

	&__link {
		text-align: center;
		text-decoration: none;
		padding: 0.5rem 1rem;
		margin-left: 4px;

		&:hover:not(.active) {
			background-color: var(--color-ui-sidebar);
			border-radius: 5px;
			color: var(--color-ui-primary);
		}
	}

	.active {
		background-color: var(--color-ui-primary);
		border-radius: 5px;
	}
}
</style>

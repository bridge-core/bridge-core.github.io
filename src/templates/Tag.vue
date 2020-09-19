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
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
    tag(id: $id) {
        id
        title
		belongsTo {
        	edges {
				node {
					... on Creation {
                		id
                		title
						image
						excerpt
						path
						author {
							path
							title
							image
							position
						}
						tags {
							id
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

export default {
	components: {
		Card,
	},
	computed: {
		tag() {
			return this.$page.tag
		},
	},
}
</script>

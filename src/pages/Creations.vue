<template>
	<Layout :showSidebars="false">
		<div class="mt-12 -mx-2 flex flex-wrap">
			<Card
				class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
				v-for="{
					node: { id, image, path, title, excerpt, tags, author },
				} in edges"
				:key="id"
				:to="path"
				:image="image"
				:title="title"
				:excerpt="excerpt"
				:tags="tags"
				:author="author"
			/>
		</div>
	</Layout>
</template>

<page-query>
query {
  allCreation {
    edges {
      node {
        id
        path   
        title
        image
        excerpt
        author {
            id
            title
            image
            position
        }
        tags {
            id,
            title
        }
      }
    }
  }
}
</page-query>

<script>
import Card from '../components/content/Card.vue'
export default {
	components: {
		Card,
	},
	computed: {
		edges() {
			return this.$page.allCreation.edges
		},
	},
}
</script>

<style></style>

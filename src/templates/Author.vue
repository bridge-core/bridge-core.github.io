<template>
	<Layout :showSidebars="false">
		<div class="mt-12 mx-12">
			<h1>{{ author.title }}</h1>
			<h2>{{ author.position }}</h2>

			<div class="content" v-html="author.content" />

			<h2
				v-if="contentByAuthor.length > 0"
				class="mt-8 lg:mt-12 pt-4 border-t border-ui-border w-auto"
			>
				Content by {{ author.title }}
			</h2>
			<div class="mt-12 -mx-2 flex flex-wrap">
				<Card
					class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
					v-for="{
						node: { id, image, path, title, excerpt, tags },
					} in contentByAuthor"
					:key="id"
					:to="path"
					:image="image"
					:title="title"
					:excerpt="excerpt"
					:tags="tags"
					:author="author"
				/>
			</div>
			<!-- <a
					:href="githubLink"
					class="inline-block mt-8 mb-4 lg:mt-12 lg:mb-6 text-ui-primary"
					target="_blank"
					rel="noopener noreferrer"
					title="Edit on GitHub"
					name="Edit on GitHub"
				>
					<GithubIcon class="inline mr-1" size="1.0x" />
					<span class="border-b border-dashed border-ui-primary pr-1">
						Edit this page on GitHub
					</span>
				</a> -->
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
    author(id: $id) {
        id
		image
        title
        position
        content
		belongsTo {
        	edges {
				node {
					... on Creation {
                		id
                		title
						image
						excerpt
						path
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

export default {
	components: {
		Card,
	},
	computed: {
		author() {
			return this.$page.author
		},
		contentByAuthor() {
			return this.author.belongsTo.edges.filter(
				({ node }) => node.id !== undefined
			)
		},
	},
}
</script>

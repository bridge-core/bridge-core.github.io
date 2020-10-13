<template>
	<Layout :showSidebars="false">
		<div class="mt-12 lg:mx-12">
			<div class="flex items-center">
				<g-image
					class="w-20 h-20 rounded-full mr-4"
					:src="author.image"
					:alt="`Logo of ${author.title}`"
				/>

				<div>
					<h1>{{ author.title }}</h1>
					<h2>{{ author.position }}</h2>
				</div>
			</div>

			<div class="content" v-html="author.content" />
			<GithubEdit
				class="mt-8 mb-4"
				:githubLink="githubLink"
				:smallIcon="true"
			/>

			<h2
				v-if="contentByAuthor.length > 0"
				class="mt-8 lg:mt-12 pt-4 border-t border-ui-border w-auto"
			>
				Created by {{ author.title }}
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
		fileInfo {
			path
		}
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
					... on Plugin {
                		id
                		title: name
						excerpt: description
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
import Card from '@/components/content/Card.vue'
import GithubEdit from '@/components/content/GithubEdit.vue'

export default {
	components: {
		Card,
		GithubEdit,
	},
	computed: {
		githubLink() {
			return (
				'https://github.com/bridge-core/bridge-core.github.io/blob/master/content/authors/' +
				this.$page.author.fileInfo.path
			)
		},
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

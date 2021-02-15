<template>
	<div class="mt-12 mx-12">
		<h1 class="text-center">Contributors</h1>
		<p class="text-center">
			bridge. would not be possible without its amazing developers and
			contributors!
		</p>
		<div class="mt-12 -mx-2 flex flex-wrap justify-items-center">
			<AuthorTag
				class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
				v-for="user in all"
				:key="user.id"
				:author="user"
			/>
		</div>
	</div>
</template>

<static-query>
query {
	allAuthor {
		edges {
			node {
				id
				path   
				title
				position
				image
				teamMember
			}
		}
	}
	allContributor {
		edges {
			node {
				id
				isPluginAuthor
				type
				path
				title
				image
			}
		}
	}
}
</static-query>

<script>
export default {
	computed: {
		contributors() {
			return this.$static.allContributor.edges
				.map(({ node }) => ({
					...node,
					teamMember: true,
					position: 'Contributor',
				}))
				.filter(
					({ type, title, isPluginAuthor }) =>
						type !== 'Bot' &&
						title !== 'actions-user' &&
						!isPluginAuthor
				)
		},
		teamMembers() {
			return this.$static.allAuthor.edges
				.map(({ node }) => node)
				.filter(user => user.teamMember)
		},
		all() {
			const cons = []
			for (let c of this.contributors) {
				if (
					!this.teamMembers.find(
						({ githubLogin, title, id }) =>
							id.toLowerCase() === c.title.toLowerCase()
					)
				)
					cons.push(c)
			}
			return this.teamMembers.concat(cons)
		},
	},
}
</script>

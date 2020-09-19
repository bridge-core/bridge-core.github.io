<template>
	<a
		:href="githubLink"
		class="flex items-center text-ui-primary"
		target="_blank"
		rel="noopener noreferrer"
		title="Edit on GitHub"
		name="Edit on GitHub"
	>
		<GithubIcon class="inline mr-1" :size="smallIcon ? '1.0x' : '1.5x'" />
		<span class="underline pr-1 text-center">
			Edit this page on GitHub
		</span>
	</a>
</template>

<script>
import { GithubIcon } from 'vue-feather-icons'
export default {
	components: {
		GithubIcon,
	},
	props: {
		githubLink: String,
		smallIcon: {
			default: false,
			type: Boolean,
		},
	},
}
</script>

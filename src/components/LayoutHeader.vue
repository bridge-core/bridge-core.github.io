<template>
	<div class="py-2 border-t-2 border-ui-primary">
		<div class="container">
			<div class="flex items-center justify-between -mx-2 sm:-mx-4">
				<nav
					class="flex flex-col items-center px-2 mr-auto sm:px-4 sm:flex-row"
				>
					<g-link
						to="/"
						class="flex items-center text-ui-primary"
						title="Home"
					>
						<Logo width="20px" class="text-ui-primary" />
						<span
							class="hidden ml-2 text-xl font-bold tracking-tighter sm:block"
						>
							{{ meta.siteName }}
						</span>
					</g-link>

					<span class="hidden ml-2 mr-3 sm:flex sm:ml-8">
						<g-link
							v-for="link in settings.nav.links"
							:key="link.path"
							:to="link.path"
							class="block p-1 mr-2 font-medium nav-link text-ui-typo hover:text-ui-primary"
						>
							{{ link.title }}
						</g-link>
					</span>
				</nav>

				<div class="w-full px-2 sm:px-4 max-w-screen-xs">
					<ClientOnly>
						<Search />
					</ClientOnly>
				</div>

				<div class="flex items-center justify-end px-2 sm:px-4">
					<a
						v-if="settings.twitter"
						:href="settings.twitter"
						class="hidden ml-3 sm:block"
						target="_blank"
						rel="noopener noreferrer"
						title="Twitter"
						name="Twitter"
					>
						<TwitterIcon size="1.5x" />
					</a>

					<a
						v-if="settings.github"
						:href="settings.github"
						class="sm:ml-3"
						target="_blank"
						rel="noopener noreferrer"
						title="Github"
						name="Github"
					>
						<GithubIcon size="1.5x" />
					</a>
					<a
						v-if="settings.web"
						:href="settings.web"
						class="hidden ml-3 sm:block"
						target="_blank"
						rel="noopener noreferrer"
						title="Discord"
						name="Discord"
					>
						<DiscordIcon size="1.5" />
					</a>

					<ToggleDarkMode class="ml-2 sm:ml-8">
						<template slot="default" slot-scope="{ dark }">
							<MoonIcon v-if="dark" size="1.5x" />
							<SunIcon v-else size="1.5x" />
						</template>
					</ToggleDarkMode>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from '@/components/ToggleDarkMode'
import Logo from '@/components/Logo'
import {
	SunIcon,
	MoonIcon,
	GlobeIcon,
	GithubIcon,
	TwitterIcon,
} from 'vue-feather-icons'
import DiscordIcon from './DiscordIcon.vue'

const Search = () =>
	import(/* webpackChunkName: "search" */ '@/components/Search').catch(
		error => console.warn(error)
	)

export default {
	components: {
		Logo,
		Search,
		ToggleDarkMode,
		SunIcon,
		MoonIcon,
		GlobeIcon,
		GithubIcon,
		TwitterIcon,
		DiscordIcon,
	},

	computed: {
		meta() {
			return this.$static.metadata
		},
		settings() {
			console.log(this.meta.settings)
			return this.meta.settings
		},
	},
}
</script>

<style lang="scss">
header {
	svg:not(.feather-search) {
		&:hover {
			@apply text-ui-primary;
		}
	}
}

.nav-link {
	padding-bottom: 2px;
	&.active {
		@apply text-ui-primary font-bold border-ui-primary border-b-2;
		padding-bottom: 0px;
	}
}
</style>

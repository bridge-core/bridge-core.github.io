<template>
	<Layout>
		<div class="pt-8 md:pt-16">
			<div class="flex flex-col items-center">
				<div
					class="flex justify-items-center items-center mb-2 text-ui-primary"
				>
					<Logo width="120px" />
					<h1
						class="mb-0 ml-4 text-3xl text-6xl font-black tracking-tighter border-none"
					>
						bridge.
					</h1>
				</div>

				<p class="text-xl font-medium text-center">
					- A powerful IDE for Minecraft Add-Ons -
					<br />
					<g-link to="https://editor.bridge-core.app/">
						<strong class="text-ui-primary">
							Try out bridge. now!
						</strong>
					</g-link>
				</p>

				<div class="flex justify-center mt-8 flex-wrap -mx-4">
					<g-link
						to="https://editor.bridge-core.app/"
						class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2"
					>
						<ExternalLinkIcon class="mr-4" size="1x" />
						Open Editor
					</g-link>
					<g-link
						to="/editor-docs/"
						class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-ui-primary border rounded-lg shadow-lg border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2"
					>
						Documentation
						<ChevronRightIcon class="ml-4" size="1x" />
					</g-link>
				</div>

				<p class="mt-8 text-center">
					Open Source. Free to use.
					<g-link
						to="https://editor.bridge-core.app/"
						class="border-b border-dashed border-ui-primary text-ui-primary"
					>
						Start now
					</g-link>
					!
				</p>

				<p class="text-center">
					Latest release:
					<g-link
						to="/latest-release/"
						class="border-b border-dashed border-ui-primary text-ui-primary"
					>
						{{ latestRelease.name }}
					</g-link>
				</p>
			</div>

			<div
				class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
			/>

			<div class="text-center">
				<h1>Getting Inspired</h1>
				<p>
					bridge. has been used to create some of the most advanced
					products on the Minecraft Marketplace.
				</p>

				<div class="flex justify-center">
					<Card
						class="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
						:class="{
							hidden: true,
							'sm:inline': i === 0,
							'md:inline': i < 2,
							'lg:inline': true,
						}"
						v-for="({
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
						},
						i) in $static.allCreation.edges"
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

				<div class="flex justify-center mt-8 flex-wrap -mx-4">
					<g-link
						to="/creations/"
						class="flex items-center px-6 py-2 text-2xl font-bold leading-none text-ui-primary border rounded-lg shadow-lg border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2"
					>
						More Creations
						<ChevronRightIcon class="ml-4" size="1x" />
					</g-link>
				</div>
			</div>

			<div
				class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
			/>

			<div class="flex flex-wrap justify-center -mx-4">
				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<ZapIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Zippy!
					</h3>
					<p class="text-lg text-left">
						Development with bridge. is faster thanks to its
						<BUnderline
							class="border-b border-dashed border-ui-primary text-ui-primary"
						>
							extendable compiler architecture </BUnderline
						>, <BUnderline>rich auto-completions</BUnderline> and
						<BUnderline>live previews</BUnderline> of the things you
						work on
					</p>
				</div>

				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<CodeIcon size="3x" class="mb-6 text-ui-primary" />
					<g-link to="/extension-docs/">
						<h3
							class="font-bold tracking-wide uppercase text-ui-primary"
						>
							Extendable!
						</h3>
					</g-link>

					<p class="text-lg text-left">
						Custom components, custom commands, file presets and
						themes: You can do
						<BUnderline>
							almost anything with extensions for
							bridge.</BUnderline
						>
						and choose from an already great extension ecosystem
					</p>
				</div>

				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<SlidersIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Seamless!
					</h3>
					<p class="text-lg text-left">
						bridge.
						<BUnderline>
							interacts seamlessly with Minecraft</BUnderline
						>
						and syncs behavior packs, resource pack, skin packs and
						worlds to the com.mojang folder automatically
					</p>
				</div>
			</div>

			<div
				class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
			/>

			<Team />
		</div>
	</Layout>
</template>

<static-query>
query {
	allCreation(limit: 4) {
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
	},
	allRelease(sortBy: "id", order: DESC) {
		edges {
			node {
				name
				html_url
				tag_name
				draft
				prerelease
				content
			}
		}
	}
}
</static-query>

<script>
import Logo from '@/components/Logo'
import {
	ChevronRightIcon,
	ZapIcon,
	CodeIcon,
	SlidersIcon,
	SearchIcon,
	ExternalLinkIcon,
} from 'vue-feather-icons'
import Team from '@/components/collection/Team.vue'
import Card from '@/components/content/Card.vue'
import BUnderline from '@/components/content/BUnderline.vue'

export default {
	components: {
		Logo,
		Team,
		ChevronRightIcon,
		ExternalLinkIcon,
		ZapIcon,
		CodeIcon,
		SlidersIcon,
		SearchIcon,
		Card,
		BUnderline,
	},

	metaInfo() {
		const title = 'The IDE for Minecraft Add-Ons'
		const description =
			'bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior and resource packs (JavaScript, JSON and functions) and provides a powerful work environment. Unleash the full power of add-ons with bridge. plugins and make use of rich auto-completions provided as you navigate through a file. Creating Minecraft add-ons was never more convenient!'

		return {
			title: title,
			meta: [
				{
					name: 'description',
					content: description,
				},
				{
					key: 'og:title',
					name: 'og:title',
					content: title + ' - bridge.',
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title + ' - bridge.',
				},
				{
					key: 'og:description',
					name: 'og:description',
					content: description,
				},
				{
					key: 'twitter:description',
					name: 'twitter:description',
					content: description,
				},
			],
		}
	},
	computed: {
		latestRelease() {
			for (let release of this.$static.allRelease.edges) {
				// Check release isn't a draft or prerelease
				if (release.node.draft || release.node.prerelease) continue

				// Return the valid release
				return {
					name: release.node.name,
					url: release.node.html_url,
					content: release.node.content,
				}
			}
		},
	},
}
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>

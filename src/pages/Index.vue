<template>
	<Layout>
		<div class="pt-8 md:pt-16">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-center mb-2 text-ui-primary">
					<Logo width="100px" />
					<h2
						class="text-3xl text-6xl font-black tracking-tighter border-none"
					>
						bridge.
					</h2>
				</div>
				<h1 class="text-4xl text-center lg:text-5xl">
					The IDE for Minecraft Add-Ons
				</h1>
				<p class="text-xl font-medium text-center">
					We strive to provide the best development experience
					possible
					<br />
					<strong class="text-ui-primary">
						Try out bridge. now!
					</strong>
				</p>

				<div class="flex justify-center mt-8 flex-wrap -mx-4">
					<g-link
						to="https://github.com/bridge-core/bridge./releases/latest"
						class="flex items-center px-6 py-4  text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2"
					>
						Download
						<DownloadCloudIcon class="ml-4" size="1x" />
					</g-link>
					<g-link
						to="/editor/"
						class="flex items-center px-6 py-4 text-2xl font-bold leading-none text-ui-primary border rounded-lg shadow-lg border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 mb-4 mx-2"
					>
						Read More
						<ChevronRightIcon class="ml-4" size="1x" />
					</g-link>
				</div>

				<p class="mt-8 text-center">
					Open Source. Free to use.
					<span
						class="border-b border-dashed border-ui-primary text-ui-primary"
					>
						Start now
					</span>
					!
				</p>
			</div>

			<div
				class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
			></div>

			<div class="flex flex-wrap justify-center -mx-4">
				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<ZapIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Incredibly Fast
					</h3>
					<p class="text-lg text-left">
						Development with bridge. is simply faster because of its
						<span
							class="border-b border-dashed border-ui-primary text-ui-primary"
						>
							custom syntax and rich auto-completions
						</span>
					</p>
				</div>

				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<CodeIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Plugin Support
					</h3>
					<p class="text-lg text-left">
						Custom components, custom commands, file presets and
						themes: You can do
						<span
							class="border-b border-dashed border-ui-primary text-ui-primary"
						>
							almost anything with plugins for bridge.
						</span>
					</p>
				</div>

				<div
					class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3"
				>
					<SlidersIcon size="3x" class="mb-6 text-ui-primary" />
					<h3
						class="font-bold tracking-wide uppercase text-ui-primary"
					>
						Seamless Integration
					</h3>
					<p class="text-lg text-left">
						bridge.
						<span
							class="border-b border-dashed border-ui-primary text-ui-primary"
						>
							interacts seamlessly with Minecraft
						</span>
						and loads behavior packs and the corresponding resource
						pack from the com.mojang folder automatically
					</p>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Logo from '@/components/Logo'
import {
	ChevronRightIcon,
	ZapIcon,
	CodeIcon,
	SlidersIcon,
	SearchIcon,
	DownloadCloudIcon,
} from 'vue-feather-icons'

export default {
	components: {
		Logo,
		ChevronRightIcon,
		DownloadCloudIcon,
		ZapIcon,
		CodeIcon,
		SlidersIcon,
		SearchIcon,
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
					content: title,
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title,
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
}
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>

<template>
	<div :style="`width: ${width};`">
		<g-image alt="bridge. Logo" src="~/assets/logo.svg" />
	</div>
</template>

<script>
export default {
	props: {
		width: {
			default: '50px',
			type: String,
		},
	},
}
</script>

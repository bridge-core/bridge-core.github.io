<template>
	<div :style="`width: ${width};`">
		<g-image alt="bridge. Logo" src="~/assets/logo.png" />
	</div>
</template>

<script>
export default {
	props: {
		width: {
			default: '52px',
			type: String,
		},
	},
}
</script>

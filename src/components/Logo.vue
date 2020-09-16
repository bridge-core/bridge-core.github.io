<template>
	<div :style="`width: ${width};`">
		<g-image src="~/assets/logo.png" />
	</div>
</template>

<script>
export default {
	props: {
		width: {
			default: '40px',
			type: String,
		},
	},
}
</script>

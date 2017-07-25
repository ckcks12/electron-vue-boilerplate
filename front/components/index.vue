<template lang="html">
	<div>
		<h1>Simple. That's All We Need</h1>
		<br/>
		<h3>You know, number-up examle</h3>
		<br/>
		<span>{{$store.state.num}}</span>
		<button type="button" @click="click">up</button>
	</div>
</template>

<script>
	export default {
		methods: {
			click() {
				this.$store.state.num++
			}
		}
	}
</script>

<style lang="scss">
</style>

<template>
	<div v-bind:id="id" class="tab" v-bind:class="status">
         <slot></slot>
   	</div>
</template>
<script>

	export default {
		props:[
		  "content","id","status"
		]
	}
</script>

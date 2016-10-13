<template>
	<div  class="tab" v-bind:class="status">
         <slot></slot>
   	</div>
</template>
<script>

	export default {
		props:[
		  "content","status"
		]
	}
</script>

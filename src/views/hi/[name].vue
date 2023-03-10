<script lang='ts' setup>
const props = defineProps<{name:string}>()
</script>

<template>
  <div>Filed Based Router</div>
  <i>Hi {{ props.name }}</i>
</template>



<style scoped>

</style>
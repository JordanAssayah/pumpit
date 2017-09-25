<template>
  <h5 class="h5">
    {{ text }}
  </h5>
</template>

<script>
export default {
  name: 'H5',
  props: {
    text: String
  }
}
</script>

<style scoped src="./H5.scss" lang="scss"/>

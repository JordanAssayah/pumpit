<template>
  <h3 class="h3">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: 'H3',
  props: {
    text: String
  }
}
</script>

<style scoped src="./H3.scss" lang="scss"/>

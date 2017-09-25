<template>
  <h2 class="h2">
    {{ text }}
  </h2>
</template>

<script>
export default {
  name: 'H2',
  props: {
    text: String
  }
}
</script>

<style scoped src="./H2.scss" lang="scss"/>

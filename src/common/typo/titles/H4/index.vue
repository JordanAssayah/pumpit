<template>
  <h4 class="h4">
    {{ text }}
  </h4>
</template>

<script>
export default {
  name: 'H4',
  props: {
    text: String
  }
}
</script>

<style scoped src="./H4.scss" lang="scss"/>

<template>
  <h1 class="h1">{{ text }}</h1>
</template>

<script>
export default {
  name: 'H1',
  props: {
    text: String
  }
}
</script>

<style scoped src="./H1.scss" lang="scss"/>

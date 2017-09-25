<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    manualMode: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>

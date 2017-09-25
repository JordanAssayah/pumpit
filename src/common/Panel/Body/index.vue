<template>
  <div class="panel-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PanelBody'
}
</script>

<style scoped lang="scss">
.panel-body {
  background-color: inherit;
  color: rgba(#000, 0.3);
}
</style>

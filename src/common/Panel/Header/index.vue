<template>
  <div class="panel-header pdg-">
    <PmpH4 :text="panelTitle" class="panel-title"/>
  </div>
</template>

<script>
import PmpH4 from '../../typo/titles/H4'

export default {
  name: 'PanelHeader',
  components: { PmpH4 },
  props: {
    panelTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.panel-header {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border: 2px solid rgba(0,0,0,0.3);

  background-color: inherit;
  color: rgba(0,0,0, 0.3);

  font-weight: 900;
}
</style>

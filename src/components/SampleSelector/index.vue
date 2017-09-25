<template>
  <div id="sample-selector">
    <panel>
      <panel-header panelTitle="Samples" />
      <panel-body>
        <ul>
          <li v-for="(sample, index) in samples" :key="index" class="pdgh-">
            {{ sample.name }}
          </li>
        </ul>
      </panel-body>
    </panel>
  </div>
</template>

<script>
import Panel from '../../common/Panel'
import PanelHeader from '../../common/Panel/Header'
import PanelBody from '../../common/Panel/Body'

export default {
  name: 'SampleSelector',
  components: {
    Panel,
    PanelHeader,
    PanelBody
  },
  props: {
    samples: {
      type: Array,
      default: {}
    }
  }
}
</script>

<style scoped src="./sampleSelector.scss" lang="scss"></style>
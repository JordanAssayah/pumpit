<template>
  <div id="home">
    <div class="story mrgv pdg+">
      <p class="mrgt0 mrgb++"><i>Pump IT!</i> is a simple tool to let you create funny sound loops with <a href="https://www.particle.io/products/hardware/photon-wifi-dev-kit" target="_blank">Particle photon devices</a></p>
      <div class="grid grid--multiline">
        <div class="grid__item w-1/3">
          <pmpt-h2 text="1" class="text-center"/>
          <p class="text-center h4 mrgt--">Pick</p>
        </div>
        <div class="grid__item w-1/3">
          <pmpt-h2 text="2" class="text-center"/>
          <p class="text-center h4 mrgt--">Configure</p>
        </div>
        <div class="grid__item w-1/3">
          <pmpt-h2 text="3" class="text-center"/>
          <p class="text-center h4 mrgt--">Loop!</p>
        </div>
        <div class="grid__item w-1/3">
          <sample-selector :samples="samples" />
        </div>
        <div class="grid__item w-1/3">
        </div>
        <div class="grid__item w-1/3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PmptH2 from '../common/typo/titles/H2'
import SampleSelector from '../components/SampleSelector'

export default {
  name: 'Home',
  components: {
    PmptH2,
    SampleSelector
  },
  data () {
    return {
      samples: [
        {
          name: 'Holla.mp3',
          path: '../../sdsdf'
        },
        {
          name: 'Hat.mp3',
          path: '../../sdsdf'
        },
        {
          name: 'Holla.mp3',
          path: '../../sdsdf'
        },
        {
          name: 'Hat.mp3',
          path: '../../sdsdf'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  width: 100%;
  height: 100%;
}
.story {
  background-color: rgba(#ffffff, 0.2);
  width: 100%;
  border-radius: 3px;

  box-shadow: 0 30px 50px 0 rgba(0,0,0,0.20);
}
</style>


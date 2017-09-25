<template>
  <div id="app" class="pdg+">
    <pumpit-header></pumpit-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PumpitHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    PumpitHeader
  }
}
</script>

<style src="@/assets/kanbasu/main.scss" lang="sass"></style>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
body {
  background-color: #a78c64;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
#app {
  width: 100%;
  height: 100%;
}
</style>
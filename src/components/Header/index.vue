<template>
  <header>
    <div class="grid">
      <div class="grid__item w-1/2">
        <ul class="list-inline">
          <router-link to='home' tag="li"><PmptH4 text="Home"/></router-link>
          <router-link to='projects' tag="li"><PmptH4 text="Projects" /></router-link>
          <router-link to='devices' tag="li"><PmptH4 text="Devices" /></router-link>
          <router-link to='settings' tag="li"><PmptH4 text="Settings" /></router-link>
        </ul>  
      </div>
      <div class="grid__item w-1/2">
        <ul class="list-inline list-inline--right">
          <a href="">Login</a>
        </ul>  
      </div>
    </div>
  </header>
</template>

<script>
import PmptH4 from '../../common/typo/titles/H4'

export default {
  name: 'Header',
  components: { PmptH4 }
}
</script>

<style scoped src="./header.scss" lang="scss"></style>
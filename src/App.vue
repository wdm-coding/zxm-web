<script setup>
  import {RouterView} from 'vue-router'
</script>

<template>
  <div class="app_wrap">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.app_wrap{
  width: 100vw;
  overflow-x: hidden;
}
</style>

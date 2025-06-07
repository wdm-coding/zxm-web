<script setup name='Visualization'>
import { v4 as uuidv4 } from 'uuid'
const arr = [47,48,49,50,51,52,53]
const list = arr.map(item=>({
  id:uuidv4(),
  src: new URL(`../assets/visualization/${item}.jpg`, import.meta.url).href
}))
</script>


<template>
  <div class='visualization_wrap'>
    <div v-for="item in list" :key="item.id" class="img_item">
      <img :src="item.src" style="width:1440px;height: auto;border-radius: 12px;">
    </div>
  </div>
</template>


<style lang='scss' scoped>
.visualization_wrap{
  width: 100%;
  height: auto;
  margin: 20px auto;
  .img_item{
    margin-bottom: 20px;
  }
}
</style>

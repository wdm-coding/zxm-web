<script setup name='Visualization'>
import { v4 as uuidv4 } from 'uuid'
const arr = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
const list = arr.map(item=>({
  id:uuidv4(),
  src: new URL(`../assets/visualization/${item}.jpg`, import.meta.url).href
}))
</script>


<template>
  <div class='visualization_wrap'>
    <div v-for="item in list" :key="item.id" class="img_item">
      <img :src="item.src" style="width:1440px;height: auto;">
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

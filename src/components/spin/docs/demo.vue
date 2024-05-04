<script lang="ts" setup>
import { ref } from 'vue';
const spinning = ref(true);
// 随机变换spinning状态
setInterval(
  () => {
    spinning.value = !spinning.value;
  },
  Math.random() * 2000 + 1000,
);
</script>

<template>
  <p>三种图标</p>
  <div class="spin">
    <yk-spin indicator="dot" size="large" :spinning="spinning">
      <yk-button v-if="!spinning" icon="add_task" type="success" circle />
    </yk-spin>
  </div>
  <div class="spin">
    <yk-spin indicator="circle" size="large" />
  </div>
  <div class="spin">
    <yk-spin indicator="dynamic" size="large" />
  </div>
</template>

<style>
.spin {
  position: relative;
  display: inline-block;
  background-color: aliceblue;
  width: 200px;
  height: 100px;
}
</style>

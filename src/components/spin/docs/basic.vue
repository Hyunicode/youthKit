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
  <div class="spin">
    <yk-spin type="dot" size="large" :spinning="spinning">
      <span class="content_">{{ spinning ? '加载中...' : '加载完成' }}</span>
    </yk-spin>
  </div>
  <div class="spin">
    <yk-spin type="circle" size="large" />
  </div>
  <div class="spin">
    <yk-spin type="dynamic" size="large" />
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
.content_ {
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

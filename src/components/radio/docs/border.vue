<script setup lang="ts">
import { ref } from 'vue';
const map = {
  SE: '软件学院',
  CS: '计算机学院',
  EE: '电子学院',
  ME: '机械学院',
};
const radio = ref('SE');
</script>

<template>
  <div>
    <p>Winner: {{ map[radio] }}</p>
    <yk-radio-group v-model="radio">
      <yk-radio border label="SE">软件学院</yk-radio>
      <yk-radio border label="CS">计算机学院</yk-radio>
      <yk-radio border label="EE">电子学院</yk-radio>
      <yk-radio border label="ME">机械学院</yk-radio>
    </yk-radio-group>
  </div>
</template>

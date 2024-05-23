<script setup lang="ts">
import { ref } from 'vue';
const direction = ref([
  {
    label: '水平方向',
    value: 'horizontal',
  },
  {
    label: '垂直方向',
    value: 'vertical',
  },
]);
const selectedDirection = ref('horizontal');
</script>

<template>
  <yk-select :options="direction" v-model="selectedDirection" />
  <yk-flex :vertical="selectedDirection === 'vertical'">
    <div class="yk-div" v-for="n in 4" :key="n" />
  </yk-flex>
</template>

<style lang="less">
.yk-div {
  display: block;
  height: 50px;
  width: 25%;
  &:nth-child(odd) {
    background-color: darken(#7386f0, 5%);
  }
  &:nth-child(even) {
    background-color: lighten(#7386f0, 5%);
  }
}
</style>

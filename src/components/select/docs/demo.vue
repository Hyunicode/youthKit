<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const options = ref([
  {
    label: '北京市',
    value: 1,
  },
  {
    label: '上海市',
    value: 2,
  },
  {
    label: '纽约市',
    value: 3,
  },
  {
    label: '旧金山',
    value: 4,
  },
  {
    label: '布宜诺斯艾利斯',
    value: 5,
  },
  {
    label: '伊斯坦布尔',
    value: 6,
  },
  {
    label: '拜占庭',
    value: 7,
  },
  {
    label: '君士坦丁堡',
    value: 8,
  },
]);
const selectedValue = ref(1);
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value);
});
</script>
<template>
  <yk-select :options="options" v-model="selectedValue" />
</template>

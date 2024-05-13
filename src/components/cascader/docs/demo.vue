<template>
  <yk-cascader :options="options" v-model:selected-value="selectedValue" />
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const options = ref([
  {
    value: '1',
    label: '北京',
    children: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '111',
            label: '东城区',
          },
          {
            value: '112',
            label: '西城区',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '广东',
    children: [
      {
        value: '21',
        label: '广州市',
        children: [
          {
            value: '211',
            label: '番禺区',
          },
          {
            value: '212',
            label: '天河区',
          },
        ],
      },
      {
        value: '22',
        label: '深圳市',
        children: [
          {
            value: '221',
            label: '南山区',
          },
          {
            value: '222',
            label: '保安区',
          },
        ],
      },
    ],
  },
]);
const selectedValue = ref(['2', '21', '212']);
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value);
});
</script>

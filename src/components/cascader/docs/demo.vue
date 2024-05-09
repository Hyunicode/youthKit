<script setup lang="ts">
import { YkCascaderProps } from '../';

const handleClick: YkCascaderProps['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-cascader text="示例组件" :onClick="handleClick" />
</template>

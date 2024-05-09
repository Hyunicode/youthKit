<script setup lang="ts">
import { YkGridProps } from '../';

const handleClick: YkGridProps['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-grid text="示例组件" :onClick="handleClick" />
</template>

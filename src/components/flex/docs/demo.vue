<script setup lang="ts">
import { YkFlexProps } from '../';

const handleClick: YkFlexProps['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-flex text="示例组件" :onClick="handleClick" />
</template>

<script setup lang="ts">
import { YkButtonProps } from '../';

const handleClick: YkButtonProps['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-button text="示例组件" :onClick="handleClick" />
</template>

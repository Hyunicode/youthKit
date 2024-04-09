<script setup lang="ts">
import { YkExampleProps } from '../';

const handleClick: YkExampleProps['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-example text="示例组件" :onClick="handleClick" />
</template>

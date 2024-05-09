<script setup lang="ts">
import { YkCheckoutboxProps } from '../';

const handleClick: YkCheckoutboxProps['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-checkoutbox text="示例组件" :onClick="handleClick" />
</template>

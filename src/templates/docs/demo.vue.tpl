<script setup lang="ts">
import { Yk{{name}}Props } from '../';

const handleClick: Yk{{name}}Props['onClick'] = (event) => {
  console.log('click', event?.target);
};
</script>

<template>
  <yk-{{lowercase name}} text="示例组件" :onClick="handleClick" />
</template>

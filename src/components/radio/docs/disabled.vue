<script setup lang="ts">
import { ref } from 'vue';
const radio = ref('1');
const handleChange = (val: string) => {
  console.log(val);
};
</script>

<template>
  <div>
    <p>Selected: {{ radio }}</p>
    <yk-radio-group v-model="radio" @change="handleChange">
      <yk-radio label="1">OPTION 1</yk-radio>
      <yk-radio label="2" disabled border>U BAN ME</yk-radio>
      <yk-radio label="3">OPTION 3</yk-radio>
    </yk-radio-group>
  </div>
</template>

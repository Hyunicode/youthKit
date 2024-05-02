<script setup lang="ts">
import { ref } from 'vue';
const radio1 = ref('1');
</script>

<template>
  <div>
    <yk-radio-group v-model="radio1">
      <yk-radio label="1">1</yk-radio>
      <yk-radio label="2">2</yk-radio>
      <yk-radio label="3">3</yk-radio>
    </yk-radio-group>
  </div>
</template>

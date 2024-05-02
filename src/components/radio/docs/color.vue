<script setup lang="ts">
import { ref } from 'vue';
const radio = ref('grey');
const colors = ['grey', 'teal', 'brown'];
</script>

<template>
  <div>
    <p>LUCKY: {{ radio }}</p>
    <yk-radio-group
      v-model="radio"
      v-for="color in colors"
      :key="color"
      :fill="color"
      textColor="grey"
    >
      <yk-radio :label="color" border>{{ color }}</yk-radio>
    </yk-radio-group>
  </div>
</template>

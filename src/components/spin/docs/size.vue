<script lang="ts" setup>
const sizes = ['small', 'normal', 'large'];
const types = ['dot', 'circle', 'dynamic'];
</script>

<template>
  <div v-for="size in sizes" :key="size" class="spin">
    <div v-for="type in types" :key="type" class="spin">
      <yk-spin :type="type" :size="size" />
    </div>
  </div>
</template>

<style>
.spin {
  position: relative;
  display: inline-block;
  background-color: aliceblue;
  width: 200px;
  height: 100px;
}
</style>

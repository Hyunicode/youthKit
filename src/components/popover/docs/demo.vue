<script setup lang="ts">
function openChange(visible: boolean) {
  console.log('visible:', visible);
}
</script>
<template>
  <yk-popover class="yk-popover" title="Title" @open-change="openChange">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <yk-button type="primary">Hover me</yk-button>
  </yk-popover>

  <yk-popover class="yk-popover" title="Title" @open-change="openChange" trigger="click">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <yk-button type="primary">Click me</yk-button>
  </yk-popover>
</template>

<style>
.yk-popover {
  margin: 20px;
}
</style>

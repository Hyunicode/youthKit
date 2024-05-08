<script setup lang="ts">
function openChange(visible: boolean) {
  console.log('visible:', visible);
}
</script>
<template>
  <yk-popover title="Title" @open-change="openChange">
    <template #content>
      <p>Content</p>
      <p>Content</p>
    </template>
    <yk-button type="primary">Hover me</yk-button>
  </yk-popover>
</template>

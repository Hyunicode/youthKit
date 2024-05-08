<script setup lang="ts">
import { ref } from 'vue';
const message = ref();

function onInfo(content: string) {
  message.value.info(content); // info调用
}
function onClose() {
  console.log('close');
}
</script>
<template>
  <yk-button type="primary" @click="onInfo('This is a normal message')">Info</yk-button>
  <yk-message ref="message" @close="onClose" />
</template>

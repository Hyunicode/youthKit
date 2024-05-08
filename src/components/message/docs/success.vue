<script setup lang="ts">
import { ref } from 'vue';
const message = ref();

function onSuccess(content: string) {
  message.value.success(content); // info调用
}
function onClose() {
  console.log('close');
}
</script>
<template>
  <yk-button type="success" @click="onSuccess('This is a normal message')">success</yk-button>
  <yk-message ref="message" @close="onClose" />
</template>

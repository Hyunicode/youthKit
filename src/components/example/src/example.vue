<script lang="ts" setup>
import { ref } from 'vue';
const exampleText = ref('');

// receive props
import { defineProps } from 'vue';
const props = defineProps<{
  text: string;
}>();

// method
const handleClick = () => {
  console.log('hello youthKit');
  exampleText.value = 'hello youthKit';
  setTimeout(() => {
    exampleText.value = props.text;
  }, 1000);
};

// lifecycle
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
  console.log('mounted');
});
onUnmounted(() => {
  console.log('unmounted');
});

// watch
import { watch } from 'vue';
watch(
  () => props.text,
  (newVal, oldVal) => {
    console.log('text changed', newVal, oldVal);
  },
);
</script>

<template>
  <div class="yk--example" @click="handleClick">{{ exampleText || text }}</div>
</template>

<style lang="less" scoped>
.yk--example {
  background-color: teal;
  width: fit-content;
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  font-family: sans-serif, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
    transition: all 0.3s;
  }
}
</style>

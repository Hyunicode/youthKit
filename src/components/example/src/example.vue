<script lang="ts" setup>
import { ref } from 'vue';
const exampleText = ref('');

// receive props
const props = defineProps<{
  text: string;
}>();

// method
const handleClick = () => {
  exampleText.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    exampleText.value += text[exampleText.value.length];
    if (exampleText.value === text) {
      clearInterval(timer);
    }
  }, 100);

  setTimeout(() => {
    exampleText.value = '';
  }, 3000);
};

// lifecycle
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
  console.log('mounted', props.text);
});
onUnmounted(() => {
  console.log('unmounted');
});
</script>

<template>
  <div class="yk--example" @click="handleClick">{{ exampleText || text }}</div>
</template>

<style lang="less" scoped>
@primiColor: #54b980;
.yk--example {
  background-color: @primiColor;
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
    background-color: darken(@primiColor, 10%);
  }
}
</style>

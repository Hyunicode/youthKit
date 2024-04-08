<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const exampleText = ref('');
defineExpose({ exampleText });
// received props
const props = defineProps<YkExampleProps>();

// method
const handleClick = () => {
  if (exampleText.value) return;
  exampleText.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    exampleText.value += text[exampleText.value.length];
    if (exampleText.value === text) {
      clearInterval(timer);
    }
  }, 100);
  setTimeout(() => (exampleText.value = ''), 2000);
};

// lifecycle
onMounted(() => {
  console.log('mounted', props.text);
});
onUnmounted(() => {
  console.log('unmounted');
});
</script>

<script lang="ts">
export interface YkExampleProps {
  text: string;
  onClick?: (event: MouseEvent) => void;
}
</script>

<template>
  <div class="yk--example" @click="onClick" @dblclick="handleClick">
    {{ exampleText || text }}
  </div>
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

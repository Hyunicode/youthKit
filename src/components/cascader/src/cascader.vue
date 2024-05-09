<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cascaderText = ref('');
defineExpose({ cascaderText });
// received props
const props = defineProps<YkCascaderProps>();

// method
const handleClick = () => {
  if (cascaderText.value) return;
  cascaderText.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    cascaderText.value += text[cascaderText.value.length];
    if (cascaderText.value === text) {
      clearInterval(timer);
    }
  }, 100);
  setTimeout(() => (cascaderText.value = ''), 2000);
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
export interface YkCascaderProps {
  text: string;
  onClick?: (event: MouseEvent) => void;
}
</script>

<template>
  <div class="yk--cascader" @click="onClick" @dblclick="handleClick">
    {{ cascaderText || text }}
  </div>
</template>

<style lang="less" scoped>
@primiColor: #54b980;
.yk--cascader {
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

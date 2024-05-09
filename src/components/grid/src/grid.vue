<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const gridText = ref('');
defineExpose({ gridText });
// received props
const props = defineProps<YkGridProps>();

// method
const handleClick = () => {
  if (gridText.value) return;
  gridText.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    gridText.value += text[gridText.value.length];
    if (gridText.value === text) {
      clearInterval(timer);
    }
  }, 100);
  setTimeout(() => (gridText.value = ''), 2000);
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
export interface YkGridProps {
  text: string;
  onClick?: (event: MouseEvent) => void;
}
</script>

<template>
  <div class="yk--grid" @click="onClick" @dblclick="handleClick">
    {{ gridText || text }}
  </div>
</template>

<style lang="less" scoped>
@primiColor: #54b980;
.yk--grid {
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

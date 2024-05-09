<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const flexText = ref('');
defineExpose({ flexText });
// received props
const props = defineProps<YkFlexProps>();

// method
const handleClick = () => {
  if (flexText.value) return;
  flexText.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    flexText.value += text[flexText.value.length];
    if (flexText.value === text) {
      clearInterval(timer);
    }
  }, 100);
  setTimeout(() => (flexText.value = ''), 2000);
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
export interface YkFlexProps {
  text: string;
  onClick?: (event: MouseEvent) => void;
}
</script>

<template>
  <div class="yk--flex" @click="onClick" @dblclick="handleClick">
    {{ flexText || text }}
  </div>
</template>

<style lang="less" scoped>
@primiColor: #54b980;
.yk--flex {
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

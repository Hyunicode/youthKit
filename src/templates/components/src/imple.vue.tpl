<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const {{lowercase name}}Text = ref('');
defineExpose({ {{lowercase name}}Text });
// received props
const props = defineProps<Yk{{name}}Props>();

// method
const handleClick = () => {
  if ({{lowercase name}}Text.value) return;
  {{lowercase name}}Text.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    {{lowercase name}}Text.value += text[{{lowercase name}}Text.value.length];
    if ({{lowercase name}}Text.value === text) {
      clearInterval(timer);
    }
  }, 100);
  setTimeout(() => ({{lowercase name}}Text.value = ''), 2000);
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
export interface Yk{{name}}Props {
  text: string;
  onClick?: (event: MouseEvent) => void;
}
</script>

<template>
  <div class="yk--{{lowercase name}}" @click="onClick" @dblclick="handleClick">
    {{mustache name}}
  </div>
</template>

<style lang="less" scoped>
@primiColor: #54b980;
.yk--{{lowercase name}} {
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

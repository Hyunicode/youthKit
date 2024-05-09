<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const checkoutboxText = ref('');
defineExpose({ checkoutboxText });
// received props
const props = defineProps<YkCheckoutboxProps>();

// method
const handleClick = () => {
  if (checkoutboxText.value) return;
  checkoutboxText.value = '';
  const text = 'hello_youthKit';
  const timer = setInterval(() => {
    checkoutboxText.value += text[checkoutboxText.value.length];
    if (checkoutboxText.value === text) {
      clearInterval(timer);
    }
  }, 100);
  setTimeout(() => (checkoutboxText.value = ''), 2000);
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
export interface YkCheckoutboxProps {
  text: string;
  onClick?: (event: MouseEvent) => void;
}
</script>

<template>
  <div class="yk--checkoutbox" @click="onClick" @dblclick="handleClick">
    {{ checkoutboxText || text }}
  </div>
</template>

<style lang="less" scoped>
@primiColor: #54b980;
.yk--checkoutbox {
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

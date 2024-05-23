<script setup lang="ts">
import { ref } from 'vue';
const justifyOptions = ref([
  {
    label: 'start',
    value: 'flex-start',
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'end',
    value: 'flex-end',
  },
  {
    label: 'between',
    value: 'space-between',
  },
  {
    label: 'around',
    value: 'space-around',
  },
  {
    label: 'evenly',
    value: 'space-evenly',
  },
]);
const alignOptions = ref([
  {
    label: 'flex-start',
    value: 'flex-start',
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'flex-end',
    value: 'flex-end',
  },
]);
const gapOptions = ref([
  {
    label: 'Small',
    value: 'small',
  },
  {
    label: 'Middle',
    value: 'middle',
  },
  {
    label: 'Large',
    value: 'large',
  },
]);
const justify = ref(justifyOptions.value[0].value);
const alignItems = ref(alignOptions.value[0].value);
const gapSize = ref('small');
const boxStyle = {
  width: '100%',
  height: '120px',
  borderRadius: '6px',
  border: '1px solid #40a9ff',
};
</script>
<template>
  <yk-flex gap="middle" align="start" vertical>
    <yk-flex align="center" gap="middle">
      <p>flex justify :</p>
      <yk-select :options="justifyOptions" v-model="justify" />
      <p>flex align :</p>
      <yk-select :options="alignOptions" v-model="alignItems" />
      <p>gap size :</p>
      <yk-select :options="gapOptions" v-model="gapSize" />
    </yk-flex>
    <yk-flex :style="{ ...boxStyle }" :justify="justify" :align="alignItems" :gap="gapSize">
      <div class="yk-div" v-for="n in 4" :key="n" />
    </yk-flex>
  </yk-flex>
</template>

<style lang="less">
.yk-div {
  display: block;
  height: 50px;
  width: 20%;
  border-radius: 6px;
  &:nth-child(odd) {
    background-color: darken(#7386f0, 5%);
  }
  &:nth-child(even) {
    background-color: lighten(#7386f0, 5%);
  }
}
</style>

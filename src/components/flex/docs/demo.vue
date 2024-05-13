<template>
  <yk-flex vertical>
    <p>垂直方向</p>
    <div
      class="yk-div"
      v-for="n in 4"
      :key="n"
      :style="{ background: `${n % 2 ? '#1677ffbf' : '#1677ff'}` }"
    />
  </yk-flex>
  <p>水平方向</p>
  <yk-flex>
    <div
      class="yk-div"
      v-for="n in 4"
      :key="n"
      :style="{ background: `${n % 2 ? '#1677ffbf' : '#1677ff'}` }"
    />
  </yk-flex>
</template>

<style>
.yk-div {
  height: 50px;
  width: 25%;
}
</style>

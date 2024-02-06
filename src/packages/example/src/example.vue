<template>
  <div>
    <h1 @click="handleClick">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
const title = 'Hello, youthKit!'
const handleClick = () => {
  console.log('Hello, youthKit!')
}
</script>

<style>
h1 {
  color: mediumseagreen;
  user-select: none;
  background-color: antiquewhite;
  border-radius: 5px;
  width: fit-content;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
}
</style>
<template>
  <p>子元素靠左对齐</p>
  <yk-row class="yk-row" justify="start">
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
  </yk-row>
  <hr />
  <p>子元素居中对齐</p>
  <yk-row class="yk-row" justify="center">
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
  </yk-row>
  <hr />
  <p>子元素靠右对齐</p>
  <yk-row class="yk-row" justify="end">
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
  </yk-row>
  <hr />
  <p>子元素等宽分布(space-between)</p>
  <yk-row class="yk-row" justify="space-between">
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
  </yk-row>
  <hr />
  <p>子元素等宽分布(space-around)</p>
  <yk-row class="yk-row" justify="space-around">
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
  </yk-row>
  <hr />
  <p>子元素等宽分布(space-evenly)</p>
  <yk-row class="yk-row" justify="space-evenly">
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
    <yk-col class="yk-col" :span="4">col-4</yk-col>
  </yk-row>
</template>

<style lang="less" scoped>
.yk-row {
  background-color: #f5f5f5;
  .yk-col {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7386f0;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    height: 50px;
    transition: background-color 0.3s;
    &:nth-child(odd) {
      background-color: darken(#7386f0, 5%);
    }
    &:hover {
      background-color: lighten(#7386f0, 5%);
    }
  }
}
</style>

<template>
  <yk-row class="yk-row">
    <yk-col class="yk-col" :xs="2" :sm="4" :md="6" :lg="8" :xl="10">yk-col</yk-col>
    <yk-col class="yk-col" :xs="20" :sm="16" :md="12" :lg="8" :xl="4">yk-col</yk-col>
    <yk-col class="yk-col" :xs="2" :sm="4" :md="6" :lg="8" :xl="10">yk-col</yk-col>
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

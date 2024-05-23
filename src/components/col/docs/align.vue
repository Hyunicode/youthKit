<template>
  <p>顶部对齐</p>
  <yk-row class="yk-row" style="background: rgba(128, 128, 128, 0.08)" justify="center" align="top">
    <yk-col class="yk-col" :span="4">
      <p style="height: 100px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 50px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 120px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 80px">col-4</p>
    </yk-col>
    <hr class="baseline" />
  </yk-row>
  <p>居中对齐</p>
  <hr />
  <yk-row
    class="yk-row"
    style="background: rgba(128, 128, 128, 0.08)"
    justify="space-around"
    align="middle"
  >
    <yk-col class="yk-col" :span="4">
      <p style="height: 100px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 50px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 120px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 80px">col-4</p>
    </yk-col>
  </yk-row>
  <p>底部对齐</p>
  <hr />
  <yk-row
    class="yk-row"
    style="background: rgba(128, 128, 128, 0.08)"
    justify="space-between"
    align="bottom"
  >
    <yk-col class="yk-col" :span="4">
      <p style="height: 100px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 50px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 120px">col-4</p>
    </yk-col>
    <yk-col class="yk-col" :span="4">
      <p style="height: 80px">col-4</p>
    </yk-col>
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

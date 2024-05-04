<template>
  <div class="spin">
    <yk-spin type="dot" size="large" desc="加载中"> </yk-spin>
  </div>
  <div class="spin">
    <yk-spin type="circle" size="large" desc="加载中" />
  </div>
  <div class="spin">
    <yk-spin type="dynamic" size="large" desc="加载中" />
  </div>
</template>

<style>
.spin {
  position: relative;
  display: inline-block;
  background-color: aliceblue;
  width: 200px;
  height: 150px;
}
</style>

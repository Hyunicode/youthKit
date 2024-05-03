<template>
  <p>content属性</p>
  <yk-button content="loading" loading />
  <yk-button content="dataset" icon="dataset" />

  <p>插槽传入</p>
  <yk-button loading>
    <span class="case-1">Loading</span>
  </yk-button>
  <yk-button icon="dataset">
    <span class="case-2">Dataset</span>
  </yk-button>
</template>

<style scoped lang="less">
.case-1 {
  background-color: grey;
  color: white;
  padding: 20px;
  border-radius: 5px;
  &:hover {
    transform: scale(1.5);
  }
  transition: transform 0.5s;
}
.case-2 {
  background-color: #f0f0f0;
  color: #333;
  padding: 20px;
  border-radius: 5px;
  &:hover {
    transform: rotate(180deg);
  }
  transition: transform 0.5s;
}
</style>

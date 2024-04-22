<script lang="ts" setup>
const svgList = import.meta.glob('../src/svg/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});
const iconList = Object.keys(svgList).map((key) =>
  key.replace('../src/svg/', '').replace('.svg', ''),
);
</script>

<template>
  <span class="iconList">
    <span class="iconWrapper" v-for="icon in iconList" :key="icon">
      <yk-icon :name="icon" size="32" color="grey" />
      <i class="iconName">{{ icon }}</i>
    </span>
  </span>
</template>

<style lang="less" scoped>
.iconList {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  & > span {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
  & > span:hover {
    scale: 1.1;
    transition: 0.3s;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  .iconWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    height: 120px;
    .iconName {
      margin-top: 2px;
      font-size: 10px;
    }
  }
}
</style>

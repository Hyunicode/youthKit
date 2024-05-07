<script lang="ts" setup>
import status1 from './img1.vue';
import status2 from './img2.vue';
import { createNamespace } from '../../../utils/createNamespace';
const { BEM } = createNamespace('empty');

// received props
withDefaults(defineProps<YkEmptyProps>(), {
  desc: '',
  image: 'content',
  descStyle: () => ({}),
  imageStyle: () => ({}),
});
</script>

<script lang="ts">
import type { CSSProperties } from 'vue';
export interface YkEmptyProps {
  desc?: string;
  image?: string;
  descStyle?: CSSProperties;
  imageStyle?: CSSProperties;
}
</script>

<template>
  <div :class="BEM()">
    <status1 v-if="image === 'content'" :class="BEM('img1')" :style="imageStyle" />
    <status2 v-else-if="image === 'box'" :class="BEM('img2')" :style="imageStyle" />
    <slot v-else>
      <img :class="BEM('img')" :src="image" :style="imageStyle" alt="image" />
    </slot>
    <p v-if="desc" :class="[BEM('desc'), 'gray']" :style="descStyle">
      <slot name="desc">{{ desc }}</slot>
    </p>
  </div>
</template>

<style lang="less" scoped>
.yk-empty {
  text-align: center;
  .yk-empty__img {
    display: inline-block;
    vertical-align: bottom;
  }
  .yk-empty__img1 {
    display: inline-block;
    vertical-align: bottom;
    width: 180px;
    height: 100px;
  }
  .yk-empty__img2 {
    display: inline-block;
    vertical-align: bottom;
    width: 150px;
    height: 75px;
  }
  .yk-empty__desc {
    margin-top: 8px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 1.5714285714285714;
  }
  .gray {
    color: rgba(0, 0, 0, 0.25);
  }
}
</style>

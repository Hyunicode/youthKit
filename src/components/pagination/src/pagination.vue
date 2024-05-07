<script lang="ts" setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import LeftArrow from './left-arrow.vue';
import DoubleLeft from './double-left.vue';
import DoubleRight from './double-right.vue';
import RightArrow from './right-arrow.vue';
import { createNamespace } from '../../../utils/createNamespace';

const { BEM } = createNamespace('pagination');

// received props
const props = withDefaults(defineProps<YkPaginationProps>(), {
  current: 1,
  pageSize: 10,
  total: 0,
  pageListNum: 5,
  hideOnSinglePage: false,
  showQuickJumper: false,
  showTotal: false,
  placement: 'right',
});

// ref values
const currentPage = ref(props.current);
const jumpNumber = ref('');
const forwardMore = ref(false);
const backwardMore = ref(false);
const forwardArrow = ref(false);
const backwardArrow = ref(false);

// method
const getTotalPage = computed(() => Math.ceil(props.total / props.pageSize));
const pageList = computed(() => {
  return dealPageList(currentPage.value).filter((n) => n !== 1 && n !== getTotalPage.value);
});
const emit = defineEmits(['change']);
watch(currentPage, (to: number): void => {
  emit('change', {
    page: to,
    pageSize: props.pageSize,
  });
});

// life cycle
onMounted(() => {
  document.onkeydown = (e: KeyboardEvent) => {
    if (e && e.key === 'Enter') jumpPage();
  };
});
onUnmounted(() => {
  document.onkeydown = null;
});

/**
 * @description: 处理分页列表
 * @param curPage
 */
const dealPageList = (curPage: number): number[] => {
  const resList = [];
  const offset = ~~(props.pageListNum >> 1);
  const totalPage = getTotalPage.value;
  let start = curPage - offset;
  let end = curPage + offset;
  if (start < 1) {
    end = end + (1 - start);
    start = 1;
  }
  if (end > totalPage) {
    start = start - (end - totalPage);
    end = totalPage;
  }
  start = Math.max(1, start);
  end = Math.min(totalPage, end);
  forwardMore.value = start > 1;
  backwardMore.value = end < totalPage;
  for (let i = start; i <= end; i++) resList.push(i);
  return resList;
};

/**
 * @description: 点击前一页
 */
const onForward = (): void => {
  currentPage.value =
    currentPage.value - props.pageListNum > 0 ? currentPage.value - props.pageListNum : 1;
};

/**
 * @description: 点击后一页
 */
const onBackward = (): void => {
  currentPage.value =
    currentPage.value + props.pageListNum < getTotalPage.value
      ? currentPage.value + props.pageListNum
      : getTotalPage.value;
};

/**
 * @description: 跳转页码
 */
const jumpPage = (): void => {
  let num = Number(jumpNumber.value);
  if (Number.isInteger(num)) {
    num = Math.min(Math.max(1, num), getTotalPage.value);
    changePage(num);
  }
  jumpNumber.value = '';
};
const changePage = (pageNum: number): boolean | void => {
  if (pageNum === 0 || pageNum === getTotalPage.value + 1) return false;
  if (currentPage.value !== pageNum) currentPage.value = pageNum;
};
</script>

<script lang="ts">
export interface YkPaginationProps {
  current?: number;
  pageSize?: number;
  total?: number;
  pageListNum?: number;
  hideOnSinglePage?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean;
  placement?: 'left' | 'center' | 'right';
}
</script>

<template>
  <div :class="[BEM(), { hidden: hideOnSinglePage && total <= pageSize }, `${placement}`]">
    <div :class="[BEM('wrap')]">
      <span style="margin-right: 8px" v-if="showTotal"
        >共 {{ getTotalPage }} 页 / {{ total }} 条</span
      >
      <span
        :class="[BEM('item'), { disabled: currentPage === 1 }]"
        @click="changePage(currentPage - 1)"
      >
        <LeftArrow :class="BEM('arrow')" />
      </span>
      <span :class="[BEM('item'), { active: currentPage === 1 }]" @click="changePage(1)">1</span>
      <span
        :class="BEM('dbarrow')"
        ref="forward"
        v-show="forwardMore && pageList[0] - 1 > 1"
        @click="onForward"
        @mouseenter="forwardArrow = true"
        @mouseleave="forwardArrow = false"
      >
        <span :class="BEM('ellipsis')">•••</span>
        <DoubleLeft />
      </span>
      <span
        :class="[BEM('item'), { active: currentPage === page }]"
        v-for="(page, index) in pageList"
        :key="index"
        @click="changePage(page)"
        >{{ page }}</span
      >
      <span
        :class="BEM('dbarrow')"
        ref="backward"
        v-show="backwardMore && pageList[pageList.length - 1] + 1 < getTotalPage"
        @click="onBackward"
        @mouseenter="backwardArrow = true"
        @mouseleave="backwardArrow = false"
      >
        <span :class="BEM('ellipsis')">•••</span>
        <DoubleRight />
      </span>
      <span
        v-show="getTotalPage !== 1"
        :class="[BEM('item'), { active: currentPage === getTotalPage }]"
        @click="changePage(getTotalPage)"
        >{{ getTotalPage }}</span
      >
      <span
        :class="[BEM('item'), { disabled: currentPage === getTotalPage }]"
        @click="changePage(currentPage + 1)"
      >
        <RightArrow :class="BEM('arrow')" />
      </span>
      <span :class="[BEM('input')]" v-if="showQuickJumper"
        >跳至<input type="text" v-model="jumpNumber" />页</span
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../../style/global.less';

.yk-pagination {
  margin: 16px 0;
  .yk-pagination__wrap {
    display: inline-block;
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.88);
    text-align: center;
    .active {
      font-weight: 600;
      color: @colors[primary];
      border-color: @colors[primary];
      .yk-pagination__arrow {
        fill: @colors[primary];
      }
    }
    .disabled {
      color: rgba(0, 0, 0, 0.25);
      background: #fff;
      border-color: #d9d9d9;
      cursor: not-allowed;
      &:hover {
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        border-color: #d9d9d9;
        .yk-pagination__arrow {
          fill: rgba(0, 0, 0, 0.25);
        }
      }
      .yk-pagination__arrow {
        fill: rgba(0, 0, 0, 0.25);
      }
    }
    .yk-pagination__item {
      min-width: 32px;
      height: 32px;
      display: inline-block;
      user-select: none;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
      background: #fff;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        .active();
      }
      .yk-pagination__arrow {
        display: inline-block;
        fill: rgba(0, 0, 0, 0.65);
        width: 12px;
        height: 12px;
        transition: all 0.3s;
      }
      &:not(:last-child) {
        margin-right: 8px;
      }
    }
    .yk-pagination__dbarrow {
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin-right: 8px;
      width: 32px;
      height: 32px;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        .yk-pagination__ellipsis {
          opacity: 0;
          pointer-events: none;
        }
        .yk-pagination__icon {
          opacity: 1;
          pointer-events: auto;
        }
      }
      .yk-pagination__ellipsis {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        bottom: 0;
        inset-inline-start: 0;
        display: block;
        margin: auto;
        color: rgba(0, 0, 0, 0.25);
        font-family: Arial, Helvetica, sans-serif;
        line-height: 32px;
        letter-spacing: 2px;
        text-align: center;
        text-indent: 0.13em;
        opacity: 1;
        transition: all 0.2s;
      }
      .yk-pagination__icon {
        display: inline-flex;
        align-items: center;
        text-align: center;
        vertical-align: -0.125em;
        fill: @colors[primary];
        width: 12px;
        height: 12px;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s;
      }
    }
    .yk-pagination__input {
      margin-left: 8px;
      line-height: 30px;
      font-size: 14px;
      input {
        vertical-align: top;
        width: 50px;
        height: 32px;
        padding: 4px 11px;
        margin: 0 8px;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        background: #fff;
        text-align: left;
        outline: none;
        transition: all 0.3s;
        &:hover {
          border-color: @colors[primary];
        }
        &:focus {
          border-color: @colors[primary];
          box-shadow: 0 0 0 2px fade(@colors[primary], 20%);
        }
      }
    }
  }
}

.hidden {
  display: none;
}
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>

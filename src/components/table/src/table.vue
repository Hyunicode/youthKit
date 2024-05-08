<script lang="ts" setup>
import { createNamespace } from '../../../utils/createNamespace';
const { BEM } = createNamespace('table');

// received props
withDefaults(defineProps<YkTableProps>(), {
  columns: () => [],
  dataSource: () => [],
  pagination: () => {
    return { current: 1, pageSize: 10 };
  },
  showPagination: true,
  hideOnSinglePage: false,
  total: 0,
  loading: false,
});
const emit = defineEmits(['change']);

// method
const changePage = (pager: { current: number; pageSize: number }) => {
  emit('change', pager);
};

const addUnit = (value: string | number, defaultUnit = 'px') => {
  return typeof value === 'number'
    ? `${value}${defaultUnit}`
    : value.includes(defaultUnit)
      ? value
      : `${value}${defaultUnit}`;
};
</script>

<script lang="ts">
interface Column {
  title: string;
  width?: number | string;
  dataIndex: string;
  slots?: string;
}

interface Pagination {
  pageSize?: number;
  current?: number;
}

export interface YkTableProps {
  columns: Column[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: Record<string, any>[];
  pagination?: Pagination;
  showPagination?: boolean;
  hideOnSinglePage?: boolean;
  total?: number;
  loading?: boolean;
}
</script>

<template>
  <div :class="BEM('wrap')">
    <table :class="BEM()">
      <thead>
        <tr :class="BEM('tr')">
          <th
            :class="BEM('th')"
            :style="`width: ${addUnit(item.width || 30)};`"
            v-for="(item, index) in columns"
            :key="index"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody :class="BEM('body')" ref="tableRef">
        <tr :class="BEM('tr--loading')" v-show="loading">
          <yk-spin type="dynamic" size="large" :colspan="columns.length" />
        </tr>
        <tr :class="BEM('tr--empty')" v-show="!total">
          <td :class="BEM('td--empty')" :colspan="columns.length">
            <yk-empty style="margin: 32px 0" image="box" />
          </td>
        </tr>
        <tr :class="BEM('tr')" v-for="(data, index) in dataSource" :key="index">
          <td :class="BEM('td')" v-for="(col, n) in columns" :key="n" :title="data[col.dataIndex]">
            <slot v-if="col.slots" v-bind="data" :name="col.slots" :index="index">{{
              data[col.dataIndex as any] || '--'
            }}</slot>
            <span v-else>{{ data[col.dataIndex as any] || '--' }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <yk-pagination
      @change="changePage"
      :current="pagination.current"
      :pageSize="pagination.pageSize"
      :total="total"
      :hideOnSinglePage="hideOnSinglePage"
      :showQuickJumper="true"
      :showTotal="true"
      placement="right"
      v-if="showPagination && total"
    />
  </div>
</template>

<style lang="less" scoped>
.yk-table__wrap {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5714285714285714;
  border-radius: 8px 8px 0 0;
  .yk-table {
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: left;
    border-radius: 8px 8px 0 0;
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;
    .yk-table__tr {
      border: none;
      background-color: #fff;
      transition: background-color 0.3s;
      .yk-table__td {
        padding: 16px;
        border: none;
        border-bottom: 1px solid #f0f0f0;
        transition: background 0.3s;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      &:hover {
        background-color: #fafafa;
      }
    }
    .yk-table__th {
      padding: 16px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      text-align: left;
      background: #fafafa;
      border: none;
      border-bottom: 1px solid #f0f0f0;
      transition: background 0.3s ease;
      &:first-child {
        border-top-left-radius: 8px;
      }
      &:last-child {
        border-top-right-radius: 8px;
      }
    }
    .yk-table__body {
      position: relative;
      .yk-table__tr--loading {
        border: none;
        background-color: #fff;
      }
      .yk-table__tr--empty {
        border: none;
        background-color: #fff;
        &:hover {
          background: #fff;
        }
        .yk-table__td--empty {
          padding: 16px;
          border: none;
          border-bottom: 1px solid #f0f0f0;
        }
      }
    }
  }
}
</style>

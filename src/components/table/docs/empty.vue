<script setup lang="ts">
import { ref } from 'vue';
import { YkTableProps } from '../src/table.vue';
const loading = ref(false);
const total = ref(0);

const columns = ref([
  {
    title: '名字',
    width: 30,
    dataIndex: 'name',
  },
  {
    title: '年龄',
    width: 30,
    dataIndex: 'age',
  },
  {
    title: '性别',
    width: 30,
    dataIndex: 'sex',
  },
  {
    title: '邮箱',
    width: 120,
    dataIndex: 'mail',
  },
  {
    title: '地址',
    width: 100,
    dataIndex: 'address',
  },
]);
const tableData = ref<YkTableProps['dataSource']>([]);
</script>
<template>
  <yk-table
    :columns="columns"
    :data-source="tableData"
    :total="total"
    :loading="loading"
    :showPagination="false"
  >
  </yk-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(false);
const total = ref(80);
const queryParams = ref({
  pageSize: 5,
  page: 1,
});
const columns = ref([
  {
    title: '名字',
    width: 60,
    dataIndex: 'name',
    slot: 'name',
  },
  {
    title: '年龄',
    width: 30,
    dataIndex: 'age',
  },
  {
    title: '职业',
    width: 50,
    dataIndex: 'job',
    slot: 'job',
  },
  {
    title: '性别',
    width: 30,
    dataIndex: 'sex',
  },
  {
    title: '地址',
    width: 100,
    dataIndex: 'address',
  },
]);
const tableData = ref([
  {
    name: 'Stephen',
    age: 30,
    job: 'player',
    sex: '男',
    address: 'CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia',
  },
  {
    name: 'Leo',
    age: 36,
    job: 'actor',
    sex: '男',
    address: 'LA',
  },
  {
    name: 'Mr.Dear',
    age: 23,
    job: 'boy',
    sex: '男',
    address: 'Beijing',
  },
  {
    name: 'superman',
    age: 32,
    job: 'boy',
    sex: '男',
    address: 'US',
  },
]);
function getData() {
  loading.value = true;
  // 模拟调用接口获取列表数据
  setTimeout(() => {
    loading.value = false;
  }, 500);
}
function onChange(pagination: { page: number; pageSize: number }) {
  console.log('pagination:', pagination);
  queryParams.value.page = pagination.page;
  queryParams.value.pageSize = pagination.pageSize;
  getData();
}
</script>
<template>
  <yk-table
    :columns="columns"
    :data-source="tableData"
    :total="total"
    :loading="loading"
    @change="onChange"
  >
  </yk-table>
</template>

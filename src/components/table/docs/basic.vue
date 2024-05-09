<template>
  <yk-table
    :columns="columns"
    :data-source="tableData"
    :total="total"
    :loading="loading"
    @change="changePage"
  >
  </yk-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { YkTableProps } from '../src/table.vue';
const loading = ref(false);
const total = ref(0);
const queryParams = ref({
  pageSize: 5,
  page: 1,
});
const columns = ref([
  {
    title: '名字',
    width: 40,
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
const getRandomCnStr = (len: number) => {
  let randomStr = '';
  for (let i = 0; i < len; i++) {
    const randomUnicode = Math.floor(Math.random() * (40869 - 19968) + 19968).toString(16);
    randomStr += String.fromCharCode(Number(`0x${randomUnicode}`));
  }
  return randomStr;
};
const fetchData = (pageSize: number) => {
  const newPage = [];
  for (let i = 0; i < pageSize; i++) {
    const randomName = getRandomCnStr(Math.floor(Math.random() * 2 + 2));
    const randomAge = Math.floor(Math.random() * 100);
    const randomSex = Math.random() > 0.5 ? '男' : '女';
    const randomMail = `${Math.random()
      .toString(36)
      .substr(2)}@${Math.random().toString(36).substr(2)}.com`;
    const randomAddress = `${getRandomCnStr(2)}省 ${getRandomCnStr(2)}市 ${getRandomCnStr(2)}区`;
    newPage.push({
      name: randomName,
      age: randomAge,
      sex: randomSex,
      mail: randomMail,
      address: randomAddress,
    });
  }
  tableData.value = newPage;
};
const getData = () => {
  loading.value = true;
  setTimeout(() => {
    fetchData(5);
    loading.value = false;
    total.value = 40;
  }, 500);
};
const changePage = (pagination: { page: number; pageSize: number }) => {
  queryParams.value.page = pagination.page;
  queryParams.value.pageSize = pagination.pageSize;
  getData();
};
onMounted(() => {
  getData();
});
</script>

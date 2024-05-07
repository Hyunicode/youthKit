<script setup lang="ts">
import { ref } from 'vue';
const total = ref(1000);
const pageSize = ref(10);
const curPage = ref(7);
const handlePageChange = ({ page, pageSize }: { page: number; pageSize: number }) => {
  console.log('cur', page, 'total', pageSize);
};
</script>
<template>
  <yk-pagination
    showJumper
    :current="curPage"
    :pageSize="pageSize"
    :pageListLen="5"
    :total="total"
    @change="handlePageChange"
  />
  <yk-pagination
    showTotal
    :current="curPage"
    :pageSize="pageSize"
    :pageListLen="5"
    :total="total"
    @change="handlePageChange"
  />
  <yk-pagination
    showJumper
    showTotal
    :current="curPage"
    :pageSize="pageSize"
    :pageListLen="3"
    :total="total"
    @change="handlePageChange"
  />
</template>

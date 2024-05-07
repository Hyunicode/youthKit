<script setup lang="ts">
import { ref } from 'vue';
const total = ref(1000);
const pageSize = ref(10);
const curPage = ref(7);
const placement = ['left', 'center', 'right'];
const handlePageChange = ({ page, pageSize }: { page: number; pageSize: number }) => {
  console.log('cur', page, 'total', pageSize);
};
</script>
<template>
  <yk-pagination
    v-for="item in placement"
    :key="item"
    :current="curPage"
    :pageSize="pageSize"
    :pageListLen="5"
    :total="total"
    :placement="item"
    @change="handlePageChange"
  />
</template>

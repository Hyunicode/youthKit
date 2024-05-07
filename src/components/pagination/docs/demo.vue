<script setup lang="ts">
import { ref } from 'vue';
const total = ref(100);
const pagination = ref({
  pageSize: 10,
  p: 1,
});
</script>
<template>
  <yk-pagination
    show-quick-jumper
    show-total
    :current="pagination.p"
    :page-size="pagination.pageSize"
    :total="total"
  />
</template>

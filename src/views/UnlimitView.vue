<script setup lang="ts">
// import { useOrderStore } from '@/stores/order'
// import { storeToRefs } from 'pinia'
import { ref, onMounted, type Ref } from 'vue';

const categories: Ref<any[]> = ref([
  {
    id: '64f',
    name: '好喝黑糖',
    children: [
      {
        id: '445',
        name: '黑糖鮮奶',
        children: [
          { id: '37a', name: '黑糖珍珠鮮奶' },
          { id: 'feb', name: '黑糖芋圓鮮奶' },
          { id: '59c', name: '黑糖蒟蒻鮮奶' },
        ],
      },
      {
        id: '29e',
        name: '黑糖冬瓜',
        children: [
          { id: 'ac3', name: '黑糖冬瓜牛奶' },
          { id: 'ca0', name: '黑糖冬瓜珍珠' },
        ],
      },
    ],
  },
]);

onMounted(() => {
  console.log(categories);
});
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
/** style */
</style>

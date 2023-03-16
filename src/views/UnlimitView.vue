<script setup lang="ts">
// import { useOrderStore } from '@/stores/order'
// import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
import { useGithubRepositories } from '../stores/data';

const { repositories, fetchRepositories } = useGithubRepositories();

onMounted(() => {
  console.log(fetchRepositories('franklion'));
  console.log(repositories);
  fetchRepositories('franklion');
});
</script>

<template>
  <div>
    <div>
      <h3 class="title">franklion repo list:</h3>
    </div>
    <div class="list">
      <div v-for="repo in repositories" :key="repo" class="repo">
        <div class="name">{{ repo['name'] }}</div>
        <div>{{ repo['description'] ?? '無' }}</div>
        <a>{{ repo['url'] }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/** style */
.title {
  font-weight: 700;
}

.list {
  margin-top: 20px;

  .repo {
    background-color: #fff;
    color: black;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;

    .name {
      font-weight: 700;
    }
  }
}
</style>

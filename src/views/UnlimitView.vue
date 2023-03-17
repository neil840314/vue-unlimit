<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useGithubRepositories } from '../stores/data';

const { state, getRepositories } = useGithubRepositories();

const length: Ref<number> = ref(6);

onMounted(() => {
  getRepositories('franklion', length.value);

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      length.value += 6;
      getRepositories('franklion', length.value);
    }
  });
});
</script>

<template>
  <div>
    <div>
      <h2 class="title">franklion repo list:</h2>
    </div>
    <div class="list">
      <div v-for="repo in state.repositories" :key="repo" class="repo">
        <div class="name">{{ repo['name'] }}</div>
        <div>{{ repo['description'] ?? '無' }}</div>
        <a :href="repo['url']" target="_blank">{{ repo['url'] }}</a>
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
  .repo {
    background-color: #3333;
    color: black;
    border-radius: 5px;
    padding: 35px 20px;
    margin-top: 20px;

    .name {
      font-weight: 700;
    }
  }
}
</style>

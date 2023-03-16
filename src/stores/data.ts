import { computed, reactive } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useGithubRepositories = defineStore('data', () => {
  const state = reactive({
    repositories: [],
  });

  const fetchRepositories = async (username: string) => {
    console.log(username);
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
    );
    state.repositories = response.data;
  };

  const repositories = computed(() => state.repositories);

  return { fetchRepositories, repositories };
});

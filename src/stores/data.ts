import { reactive } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useGithubRepositories = defineStore('data', () => {
  const state = reactive({
    repositories: [],
  });

  const getRepositories = async (username: string, length: number) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=${length}&page=1`,
      );
      state.repositories = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { getRepositories, state };
});

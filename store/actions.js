import { fetchPosts } from './fetch';
import { AsyncStorage } from 'react-native';

// ensure data for rendering given list type
export function FETCH_POSTS_DATA ({ commit, dispatch }, { type }) {
  commit('FETCHING_POSTS');
  return fetchPosts(type)
    .then(posts => {
      return commit('SET_POSTS', { posts })
    });
}
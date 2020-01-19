<template>
  <view class="container">
    <nb-container :style="{flex:1, backgroundColor: '#fff'}">
      <nb-header>
        <nb-body>
          <nb-title>Posts</nb-title>
        </nb-body>
      </nb-header>
      <nb-content>
        <nb-list>
            
        </nb-list>
      </nb-content>
    </nb-container>
    <nb-spinner v-if="loading"></nb-spinner>
    <scroll-view v-if="!loading" :content-container-style="{flex:1, backgroundColor: '#fff'}">
      <text class="text-color-primary">{{posts}}</text>
    </scroll-view>
  </view>
</template>

<script>
import store from "../store";

export default {
  name: "app",
  data() {
    return {
      //posts: config
    };
  },
  created() {
    this.fetchPosts(store.state.postType);
  },
  methods: {
    fetchPosts(type) {
      return store.dispatch("FETCH_POSTS_DATA", {
        type: type
      });
    }
  },
  computed: {
    config() {
      return store.state.config;
    },
    postType() {
      return store.state.postType;
    },
    posts() {
      return store.state.posts;
    },
    loading() {
      console.log(store.state);
      return store.state.loadingPosts;
    }
  }
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>

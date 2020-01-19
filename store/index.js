import Vue from 'vue-native-core';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import config from '../data/config.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    mutations,
    state: {
        postType: 'posts',
        posts: 'posts',
        config: config,
        posts:[]
    }
});

export default store;
<template>
  <view class="container">
    <text class="text-color-primary">{{config.app.name}}</text>
    <text class="text-color-primary">{{config.app.version}}</text>
    <View style="text-container">
      <text-input class="text-input-container" placeholder="Check Risk..." v-model="textValue" />
      <button
        :on-press="getDetails"
        title="Get Risk Details..."
        color="#841584"
        accessibility-label="Learn more about this purple button"
      />
    </View>
  </view>
</template>

<script>
import { NavigationActions } from "vue-native-router";
import store from "../store";

export default {
  name: "app",
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      textValue: "",
      btnClickCount: 0
    };
  },
  created() {},
  methods: {
      getDetails(){
        this.navigation.navigate('Details');  
      }
  },
  computed: {
    config() {
      return store.state.config;
    },
    handleBtnClickCount: function() {
      this.btnClickCount = this.btnClickCount + 1;
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

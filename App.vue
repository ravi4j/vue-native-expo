<template>
  <root>
  <app-navigator></app-navigator>
  </root>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { Root } from "native-base";
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";
import HomeScreen from "./screens/Home.vue";
import DetailsScreen from "./screens/Details.vue";

// registering all native-base components to the global scope of the Vue  
Vue.use(VueNativeBase);

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: {Root, AppNavigator },
}
</script>
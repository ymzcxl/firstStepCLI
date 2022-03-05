<template>
  <div>
    <router-view>
    </router-view>
    <MainTabBar v-if="true"></MainTabBar>
    <div>{{storeState}}</div>
  </div>
</template>

<script setup>
import MainTabBar from "@/components/common/tabbar/TabBar.vue";
import { useStore, mapState } from "vuex";
import { computed } from "vue";

const store = useStore();
const storeStateFns = mapState(["tabShow", "date"]);
const storeState = {};

Object.keys(storeStateFns).forEach((fnKey) => {
  const fn = storeStateFns[fnKey].bind({ $store: store });
  storeState[fnKey] = computed(fn);
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

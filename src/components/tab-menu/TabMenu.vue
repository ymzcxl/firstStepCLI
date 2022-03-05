<template>
  <div class="fs-el-menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">消息论坛</el-menu-item>
      <el-menu-item index="3">分享</el-menu-item>
      <el-menu-item index="4">
         <template #title>个人中心</template>
          <!-- <el-menu-item index="4-1">主页</el-menu-item>
          <el-menu-item index="4-2">设置</el-menu-item>
          <el-menu-item index="4-3">退出</el-menu-item> -->
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>

</style>

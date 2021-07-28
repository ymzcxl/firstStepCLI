<template>
  <div class="father">
      <div class="ceshi">
        <img width="100" height="100" src="./image/shadow.png" alt="">
      </div>
  </div>
</template>

<script>
import fsName from "@/utils/prefix";
import { computed, reactive, toRefs } from "vue";

export default {
  name: `${fsName}main-show`,
  components: {},
  props: {},
  setup() {
    const state = reactive({});
    const getCss = computed(() => ({

    }));

    return {
      ...toRefs(state),
      getCss
    };
  }
};
</script>
<style scoped lang="scss">
.father{
  background: #008c8c;
  width: 300px;
  height: 300px;
  margin: auto;
}
.ceshi{
  background: #fff;
  width: 200px;
  height: 200px;
}
</style>

<template>
  <div class="main-show-module">
    <section>
      <fs-tab-menu></fs-tab-menu>
    </section>
    <section>
      <el-skeleton :rows="5" animated />
    </section>
  </div>
</template>

<script>
import fsName from "@/utils/prefix";
import { computed, reactive, toRefs } from "vue";
// import TabMenu from "../../components/tab-menu/TabMenu.vue";
import TabMenu from "@/components/tab-menu/TabMenu";

export default {
  name: `${fsName}main-show`,
  components: {
    "fs-tab-menu": TabMenu
  },
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
.main-show-module {
  display: flex;
  width: 1200px;
  margin: auto;
}

</style>

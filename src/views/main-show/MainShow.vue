<template>
  <div></div>
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
<style scoped lang="scss"></style>

<template>
  <div class="main-column">
    <div class="main-column-navbar"></div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'jueJinList',
  components: { },
  setup() {
    return {
      selectType: ref(''),
      searchTypeList: ref([{ label: 'Android' }, { label: '前端' }, { label: '产品' },
        { label: '设计'}, { label: 'iOS' }, { label: '后端' }]),
    }
  }
});
</script>

<style scoped>

</style>

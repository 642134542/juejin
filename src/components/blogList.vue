<template>
  <div class="main-column">
    <div class="main-column-navbar clearfix">
      <div class="fl image-wrapper">
        <el-image src="https://sf1-scmcdn-tos.pstatp.com/goofy/xitu_extension/static/gold.981a5510.svg"></el-image>
      </div>
      <el-select class="fl" v-model="selectType" placeholder="请选择" size="small">
        <el-option
                v-for="item in searchTypeList"
                :key="item.label"
                :label="item.label"
                :value="item.label">
        </el-option>
      </el-select>
    </div>
    <github-container></github-container>
  </div>
</template>

<script>
import {defineComponent, reactive, ref, toRefs} from "vue";
import githubContainer from './githubContainer.vue';

export default defineComponent({
  name: 'blogList',
  components: { githubContainer },
  setup() {
    const data = reactive({
      articalList: [], // 列表
      searchSelectType: 'heat', // 查询方式
    });
    const handleChangeType = (type) => {
      data.searchSelectType = type;
    };
    return {
      ...toRefs(data),
      handleChangeType,
      selectType: ref(''),
      searchTypeList: [{ label: 'Android' }, { label: '前端' }, { label: '产品' },
        { label: '设计'}, { label: 'iOS' }, { label: '后端' }],
    }
  }
});
</script>

<style scoped>

</style>

<template>
  <el-scrollbar>
    <div class="gold-list-box github-container"  v-infinite-scroll="load">
      <el-row :gutter="10">
        <el-col :span="12" v-for="item in articalList" :key="item.id">
          <github-card :item="item"></github-card>
        </el-col>
      </el-row>
    </div>
  </el-scrollbar>
</template>

<script>
import {defineComponent, reactive, toRefs} from "vue";
import { getGithubList } from '@/api/home';
import githubCard from './card/githubCard.vue';

export default defineComponent({
  name: 'githubContainer',
  components: { githubCard },
  setup() {
    const data = reactive({
      offset: 0,
      articalList: [],
    });
    /* 获取掘金的列表  */
    const getGithubListFun = () => {
      const params = {
        category: 'trending',
        period: 'day',
        lang: 'javascript',
        offset: data.offset,
        limit: 30,
      }
      getGithubList(params).then((res) => {
        data.articalList.push(...res.data.data);
      });
    };
    /**
     * 滚动加载
     */
    const load = () => {
      getGithubListFun();
      data.offset += 30;
    };
    return {
      ...toRefs(data),
      load,
    };
  }
});
</script>

<style scoped>

</style>

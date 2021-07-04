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
      <div class="fr search-select">
        <span>热度</span>
        <el-divider direction="vertical"></el-divider>
        <span>最新</span>
      </div>
    </div>
    <ul>
      <li class="jue-jin-list" v-for="item in articalList" :key="item.id">
        <artical-card :item="item"></artical-card>
      </li>
    </ul>
  </div>
</template>

<script>
import {defineComponent, ref, reactive, onMounted, toRefs} from 'vue';
import articalCard from './card/articalCard.vue';
import { getGoldList } from '@/api/home';

export default defineComponent({
  name: 'jueJinList',
  components: { articalCard },
  setup() {
    const data = reactive({
      articalList: [],
    });
    onMounted(() => {
      const params = {
        category: "frontend",
        limit: 30,
        offset: 0,
        order: "time"
      }
      getGoldList(params).then((res) => {
        data.articalList = res.data.data;
        console.log(res);
        // articalList
      });
    });
    return {
      ...toRefs(data),
      selectType: ref(''),
      searchTypeList: ref([{ label: 'Android' }, { label: '前端' }, { label: '产品' },
        { label: '设计'}, { label: 'iOS' }, { label: '后端' }]),
    }
  }
});
</script>

<style scoped>

</style>

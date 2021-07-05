<template>
  <div class="main-column">
    <div class="main-column-navbar clearfix">
      <div class="fl image-wrapper">
        <el-image src="https://sf1-scmcdn-tos.pstatp.com/goofy/xitu_extension/static/gold.981a5510.svg"></el-image>
      </div>
      <el-select class="fl" v-model="selectType"
                 @change="handleChangeCareer"
                 placeholder="请选择" size="small">
        <el-option
                v-for="item in searchTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
      </el-select>
      <div class="fr search-select">
        <span class="search-select-type"
              @click="handleChangeType('heat')"
              :class="{ 'is-active': searchSelectType === 'heat' }">热度</span>
        <el-divider direction="vertical"></el-divider>
        <span class="search-select-type"
              @click="handleChangeType('time')"
              :class="{ 'is-active': searchSelectType === 'time' }">最新</span>
      </div>
    </div>
    <el-scrollbar>
      <ul class="gold-list-box"  v-infinite-scroll="load">
        <li class="jue-jin-list" v-for="item in articalList" :key="item.id">
          <artical-card :item="item"></artical-card>
        </li>
      </ul>
    </el-scrollbar>
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
      articalList: [], // 列表
      searchSelectType: 'heat', // 查询方式
      offset: 0, // 类似翻页的页码
      selectType: 'frontend',
      searchTypeList: [{ label: '首页', value: 'all' }, { label: '前端', value: 'frontend' },
        { label: '后端', value: 'backend' }, { label: 'Android', value: 'android' },
        { label: 'iOS', value: 'ios' }, { label: '人工智能', value: 'ai' },
        { label: '阅读', value: 'article' }, { label: '开发工具', value: 'freebie' },
        { label: '代码人生', value: 'career' }],
    });
    onMounted(() => {
      // getGoldList();
    });
    /* 获取掘金的列表  */
    const getGoldListFun = () => {
      const params = {
        category: "frontend",
        limit: 30,
        offset: data.offset,
        order: data.searchSelectType,
      }
      getGoldList(params).then((res) => {
        data.articalList.push(...res.data.data);
      });
    };
    /**
     * 滚动加载
     */
    const load = () => {
      getGoldListFun();
      data.offset += 30;
    };
    /* 选择查看内容的方向 */
    const handleChangeCareer = (type) => {
      data.selectType = type;
      data.offset = 0;
      data.articalList = [];
      getGoldListFun();
    };
    /* 切换搜索的类型，重新搜索 */
    const handleChangeType = (type) => {
      data.searchSelectType = type;
      data.offset = 0;
      data.articalList = [];
      getGoldListFun();
    };
    return {
      ...toRefs(data),
      handleChangeCareer,
      handleChangeType,
      getGoldListFun,
      load,
    }
  }
});
</script>

<style scoped>

</style>

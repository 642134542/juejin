<template>
  <div class="main-column">
    <div class="main-column-navbar">
      <p class="fl pins-title">沸点</p>
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
      <ul class="gold-list-box pin-list-box"  v-infinite-scroll="load">
        <li v-for="item in articalList" :key="item.id">
          <pin-card :item="item"></pin-card>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
import {defineComponent, reactive, ref, toRefs} from "vue";
import { getPinsList } from '@/api/home';
import pinCard from '../components/card/pinCard.vue';

export default defineComponent({
  name: 'jueJinList',
  components: { pinCard },
  setup() {
    const data = reactive({
      articalList: [], // 列表
      searchSelectType: 'heat', // 查询方式
      offset: 0, // 类似翻页的页码
    });
    /* 获取掘金的列表  */
    const getPinsListFun = () => {
      const params = {
        limit: 30,
        offset: data.offset,
        order: data.searchSelectType,
      }
      getPinsList(params).then((res) => {
        data.articalList.push(...res.data.data);
      });
    };
    /**
     * 滚动加载
     */
    const load = () => {
      getPinsListFun();
      data.offset += 30;
    };
    /* 选择查看内容的方向 */
    const handleChangeType = (type) => {
      data.searchSelectType = type;
      data.offset = 0;
      data.articalList = [];
      getPinsListFun();
    };
    return {
      ...toRefs(data),
      load,
      handleChangeType,
    }
  }
});
</script>

<style scoped>

</style>

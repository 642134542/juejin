<template>
  <el-container class="home-container">
    <el-header height="54px" class="clearfix">
      <svg-icon class="brand" name="brand-white"></svg-icon>
      <el-popover
              placement="bottom"
              :width="320"
              trigger="hover">
        <book></book>
        <template #reference>
          <a class="title">
            掘金小册
          </a>
        </template>
      </el-popover>
      <el-popover
              placement="bottom"
              :width="134"
              popper-class="qrcode-popover"
              trigger="hover">
        <a href="https://juejin.zlink.toutiao.com/fWdY?source=jj_ext_nav"
           target="_blank" class="qrcode-wrapper">
          <img src="https://sf1-scmcdn-tos.pstatp.com/goofy/xitu_extension/static/qrcode.dfaef7f2.png" alt="掘金APP">
          <p>扫码下载APP</p>
        </a>
        <template #reference>
          <a class="btn-download-App">下载掘金APP</a>
        </template>
      </el-popover>
      <search class=""></search>
      <div class="fr header-right">
        <el-select v-model="selectType" placeholder="请选择" size="small">
          <el-option
                  v-for="item in searchTypeList"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label">
          </el-option>
        </el-select>
        <svg-icon name="icon-day"></svg-icon>
        <svg-icon name="icon-layout"></svg-icon>
        <svg-icon name="icon-set"></svg-icon>
      </div>
    </el-header>
    <el-main class="home-main">
      <el-container class="home-body-container">
        <el-aside width="450px">
          <jue-jin-list></jue-jin-list>
        </el-aside>
        <el-main>
          <blog-list></blog-list>
        </el-main>
        <el-aside width="450px">
          <boiling-point-list></boiling-point-list>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import {defineComponent, computed, onMounted, ref} from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import book from '@/components/book.vue';
import search from '../components/search.vue';
import jueJinList from '../components/jueJinList.vue';
import blogList from '../components/blogList.vue';
import boilingPointList from '../components/boilingPointList.vue';

export default defineComponent({
  name: 'home',
  components: { SvgIcon, book, search, jueJinList, blogList, boilingPointList },
  setup() {
    return {
      selectType: ref(''),
      searchTypeList: [{ label: 'Android' }, { label: '前端' }, { label: '产品' },
        { label: '设计'}, { label: 'iOS' }, { label: '后端' }],
    }
  }
});
</script>

<style scoped>

</style>

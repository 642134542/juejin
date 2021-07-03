<template>
  <el-container class="home-container">
    <el-header height="4.5rem" class="clearfix">
      <svg-icon class="brand" name="brand-white"></svg-icon>
      <div class="book-banner reading">
        <a href="https://juejin.cn/books" class="title" target="_blank">
          掘金小册
        </a>
      </div>
    </el-header>
    <el-main class="home-main">
      <el-container>
        <el-aside></el-aside>
        <el-main></el-main>
        <el-aside></el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'home',
  components: { SvgIcon },
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>

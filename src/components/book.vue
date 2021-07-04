<template>
  <div class="book-panel">
    <div class="panel--inner">
      <div class="book-info clearfix">
        <a href="https://juejin.cn/book/6950646725295996940" class="poster fl" target="_blank">
          <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d3496c87b8748aa998d55ee7d16398e~tplv-k3u1fbpfcp-watermark.image" alt="Electron + React 从 0 到 1 实现简历平台实战" class="img"></a>
        <div class="info fl">
          <div class="name">
            <b class="new">
              <span>NEW</span>
            </b>
            <a href="https://juejin.cn/book/6950646725295996940" class="title-link txt-ellipsis" target="_blank">
              Electron + React 从 0 到 1 实现简历平台实战
            </a>
          </div>
          <a class="user-info" target="_blank">
            <el-image class="avatar"></el-image>
            <div class="user-name">彭道宽 <span>·</span></div>
            <div class="user-desc txt-ellipsis">SugarTurboS Club 成员</div>
          </a>
          <a href="https://juejin.cn/book/6950646725295996940" class="desc" target="_blank">
            本小册从一个开发者角度，讲述技术选型到编码实现，点亮 Electron、TS 等技术点，逐步深入React开发，从0到1实现一款轻巧适用的简历平台桌面应用。
          </a>
          <div class="other clearfix">
            <div class="section fl">30小节</div>
            <div class="bought fl">
              <span>682</span><span>已购买</span>
            </div>
            <b class="price fr"><small data-v-16700eea="">¥</small>
              <span>29.9</span></b>
          </div>
        </div>
      </div>
    </div>
    <div class="consume">
      <a href="https://juejin.cn/book/6950646725295996940" target="_blank" class="btn btn-buy">详情</a>
      <a href="https://juejin.cn/book/6950646725295996940/section/" target="_blank" class="btn btn-read"> 试读 </a>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted } from 'vue';
import { getBrochure } from '../api/home.js'

export default defineComponent({
  name: 'book',
  setup() {
    /* onMounted(() => {
      const params = {
        category_id: '0',
        cursor: '0',
        limit: 10
      }
      getBrochure(params).then((res) => {
        console.log(res);
      });
    }); */
  },
});
</script>

<style scoped>
  .book-banner .panel {
    position: absolute;
    top: 100%;
    padding-top: 11px;
    width: 26.6666666667rem;
    display: none;
  }
</style>

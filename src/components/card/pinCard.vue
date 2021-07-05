<template>
  <div class="pin-card" @click="jumpToDetail(item.url)">
    <p>{{item.content}}</p>
    <div class="pin-card-info">
      <el-avatar :src="item.avatar"
                 size="small" @click.stop.native="jumpToDetail(item.userUrl)"></el-avatar>
      <div class="pin-user-info" @click.stop="jumpToDetail(item.userUrl)">
        <span class="user-name">{{item.username}}</span>
      </div>
      <div class="pin-card-count">
        <span>
          <svg-icon name="thumbs-up"></svg-icon>
          <span>{{item.thumbsupCount}}</span>
        </span>
        <span>
          <svg-icon name="reply"></svg-icon>
          <span>{{item.commentCount}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent,computed, ref} from "vue";
import SvgIcon from '@/components/SvgIcon.vue';

export default defineComponent({
  name: 'pinCard',
  props: {
    item: Object,
  },
  components: { SvgIcon },
  setup(props) {
    /* 跳转到详情页 */
    const jumpToDetail = (url) => {
      window.open(url, '_blank');
    }
    return {
      jumpToDetail,
    }
  }
});
</script>

<style scoped>

</style>

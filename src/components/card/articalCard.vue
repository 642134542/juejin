<template>
  <div class="artical-card" @click="jumpToDetail">
    <h3 class="artical-card-title txt-ellipsis">
      {{item.title}}
    </h3>
    <div class="artical-card-other clearfix">
      <div class="fl article-info has-tag">
        <div class="fl tags">#鸿蒙OS</div>
        <div class="fl tags">#前端</div>
        <div class="fl user-name txt-ellipsis">{{item.user.username}}</div>
        <div class="fl timestamp">3小时前</div>
      </div>
      <div class="fr artical-card-num">
        <span>
          <svg-icon name="thumbs-up"></svg-icon>
          <span>0</span>
        </span>
        <span>
          <svg-icon name="reply"></svg-icon>
          <span>0</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import SvgIcon from '@/components/SvgIcon.vue';

export default defineComponent({
  name: 'articalCard',
  props: {
    item: Object,
  },
  components: { SvgIcon },
  setup(props) {
    /* 跳转到详情页 */
    const jumpToDetail = () => {
      window.open(props.item.url, '_blank');
    }
    return {
      jumpToDetail,
    }
  }
});
</script>

<style scoped>

</style>

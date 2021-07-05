<template>
  <div class="artical-card" @click="jumpToDetail">
    <h3 class="artical-card-title txt-ellipsis">
      {{item.title}}
    </h3>
    <div class="artical-card-other clearfix">
      <div class="fl article-info has-tag">
        <span class="fl">#</span>
        <div class="fl tags" v-for="t in tags" :key="t.tags">{{t.tag_name}}</div>
        <div class="fl user-name txt-ellipsis">{{item.user.username}}</div>
        <div class="fl timestamp">{{timeTxt}}</div>
      </div>
      <div class="fr artical-card-num">
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
import { dateTimeStamp } from '@/utils/dateTimeStamp'

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
    const timeTxt = computed(() => {
      if (props.item && props.item.date) {
        const time = new Date(props.item.date.iso).getTime();
        return dateTimeStamp(time);
      }
      return '';
    });
    const tags = computed(() => {
      if (props.item.tags) {
        return  props.item.tags.splice(0, 2);
      }
      return [];
    });
    return {
      timeTxt,
      tags,
      jumpToDetail,
    }
  }
});
</script>

<style scoped>

</style>

<template>
  <div class="github-card">
    <h3>{{item.id}}</h3>
    <p class="desc">{{item.description}}</p>
    <div class="github-other-info">
      <span>
        <svg-icon name="icon-star"></svg-icon>
        <span>{{item.starCount}}</span>
      </span>
      <span>
         <svg-icon name="icon-share"></svg-icon>
        <span>{{item.forkCount}}</span>
      </span>
      <span>
        <i class="icon-dot"></i>
        <span>{{item.lang}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import {defineComponent,computed, ref} from "vue";
import SvgIcon from '@/components/SvgIcon.vue';

export default defineComponent({
  name: 'githubCard',
  props: {
    item: Object,
  },
  components: { SvgIcon },
  setup(props) {
    /* 跳转到详情页 */
    const jumpToDetail = () => {
      window.open(props.item.url, '_blank');
    }
    const tags = computed(() => {
      if (props.item.tags) {
        return  props.item.tags.splice(0, 2);
      }
      return [];
    });
    return {
      tags,
      jumpToDetail,
    }
  }
});
</script>

<style scoped>

</style>

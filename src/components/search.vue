<template>
  <div class="search-field">
    <el-input
            placeholder="请输入关键字"
            v-model="keyword"
            class="input-with-select" size="small">
      <template #prepend>
        <el-select v-model="select" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </template>
    </el-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  name: 'search',
  setup() {
    return {
      keyword: ref(''),
      select: ref(''),
      searchTypeList: [{ }],
    }
  }
})
</script>

<style scoped>

</style>

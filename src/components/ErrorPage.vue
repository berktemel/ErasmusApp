<template>
 <h1>
   You are not authorized to view this page. Click the button below to go back.
 </h1>
  <el-button type="primary" @click="returnBack">
    Return
  </el-button>
</template>

<script>
import {ElButton} from 'element-plus'
export default {
  name: "ErrorPage",
  components: {
    ElButton
  },
  methods: {
    returnBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <el-menu
      background-color="#282E35"
      class="el-menu-demo"
      mode="horizontal"
      :default-active="$route.path"
      text-color="gray"
      active-text-color="white"
      router=true
  >
    <img src="../../assets/bilkent.png" alt="Bilkent Logo" class="bilkentLogo">
    <el-menu-item index="/forms" route="/forms">
      Forms
    </el-menu-item>
    <el-menu-item index="/courses" route="/courses">
      Courses
    </el-menu-item>
    <el-menu-item index="/request-course" route="/request-course">
      Request Course
    </el-menu-item>
    <el-menu-item index="/send-mail" route="/send-mail">
        Mail
    </el-menu-item>
    <el-menu-item index="/profile" route="/profile">
      <el-icon><UserFilled /></el-icon>
      Profile
    </el-menu-item>
    <el-button type="danger" class="logoutButton" style='margin-left: auto;' @click="logout()">
      <el-icon><SwitchButton /></el-icon>
      Logout
    </el-button>
  </el-menu>
</template>


<script>
import {SwitchButton, UserFilled} from '@element-plus/icons-vue'
import {ElMenuItem,ElMenu,ElButton, ElIcon} from 'element-plus'
export default {
  name: "StudentNavigationBar",
  components: {
    ElMenuItem,ElMenu,ElButton, ElIcon,
    SwitchButton, UserFilled
  },
  data() {
    return {

    }
  },
  methods: {
    redirectPage(url) {
      this.$router.replace(url);
    },
    logout() {
      localStorage.removeItem("userType");
      this.redirectPage('/login')
    }
  },
  mounted() {
    let type = localStorage.getItem("userType");
    if(type !== "STUDENT") {
      this.redirectPage('/unauthorized-access');
    }
  }
}
</script>

<style scoped>
.logoutButton {
  float: right;
  margin: 0.5%;
}
.bilkentLogo {
  float: left;
  width: 60px;
  height: 60px;
}

</style>
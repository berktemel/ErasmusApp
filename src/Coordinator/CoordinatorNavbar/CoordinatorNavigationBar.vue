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
    <el-menu-item index="/to-do-list" route="/to-do-list">
      ToDoList
    </el-menu-item>
    <el-menu-item index="/course-approve" route="/course-approve">
      Course Approve
    </el-menu-item>
    <el-menu-item index="/form-list" route="/form-list">
      Form List
    </el-menu-item>
    <el-menu-item index="/send-mail" route="/send-mail">
      Mail
    </el-menu-item>
    <el-menu-item index="/profile">
      <el-icon><UserFilled/></el-icon>
      Profile
    </el-menu-item>
    <el-button type="danger" class="logoutButton" style='margin-left: auto;' @click="logout()">
      <el-icon><SwitchButton /></el-icon>
      Logout
    </el-button>
  </el-menu>
</template>


<script>
import {ElMenu, ElMenuItem, ElButton, ElIcon} from 'element-plus'
import {UserFilled, SwitchButton} from '@element-plus/icons-vue'
export default {
  name: "CoordinatorNavigationBar",
  components: {
    ElMenu, ElMenuItem, ElButton, ElIcon, UserFilled, SwitchButton
  },
  data() {
    return {}
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
    if (type !== "COORDINATOR") {
      this.redirectPage('/unauthorized-access');
    }
  }
}
</script>

<style scoped>
.logoutButton {
  margin: 0.5%;
}

.bilkentLogo {
  float: left;
  width: 60px;
  height: 60px;
}

</style>
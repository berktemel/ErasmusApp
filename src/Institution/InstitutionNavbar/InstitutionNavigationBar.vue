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

    <el-sub-menu index="3">
      <template #title>Users</template>
      <el-menu-item index="/approved-users" route="/approved-users">
        Approved
      </el-menu-item>
      <el-menu-item index="/pending-users" route="/pending-users">
        Pending
      </el-menu-item>
    </el-sub-menu>

    <el-button type="danger" class="logoutButton" style='margin-left: auto;' @click="logout()">
      <el-icon><SwitchButton /></el-icon>
      Logout
    </el-button>
  </el-menu>
</template>

<script>
import {ElMenu, ElMenuItem, ElButton, ElIcon, ElSubMenu} from 'element-plus'
import {SwitchButton} from '@element-plus/icons-vue'
export default {
  name: "InstitutionNavigationBar",
  components: {
    ElMenu, ElMenuItem, ElButton, ElIcon, ElSubMenu,
    SwitchButton
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
    if(type !== "INSTITUTION") {
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
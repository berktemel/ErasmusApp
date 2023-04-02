<template>
  <InstitutionNavigationBar />
  <el-space direction="vertical" class="space">
    <div><b>Approved Users</b></div>
    <el-table :data="filteredUsers" border stripe height="60vh" class="table">
      <el-table-column prop="id" label="ID" width="100%"/>
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="lastname" label="Lastname" />
      <el-table-column prop="email" label="Email" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Search by name" />
        </template>
        <template #default="scope">
          <el-button type="danger" size="small" @click="confirmDelete(scope.$index)">
            Delete Account
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-space>
</template>

<script>
import InstitutionNavigationBar from "@/Institution/InstitutionNavbar/InstitutionNavigationBar";
import {ElMessage, ElMessageBox} from "element-plus";
import {ElSpace, ElTableColumn, ElTable, ElInput, ElButton} from 'element-plus'
export default {
  name: "ApprovedUsers",
  components: {
    InstitutionNavigationBar,
    ElSpace, ElTableColumn, ElTable, ElInput, ElButton
  },
  data() {
    return {
      users: [
        {
          id: 22002675,
          name: "Berk",
          lastname: "Temel",
          email: "berk.temel@ug.bilkent.edu.tr"
        },
        {
          id: 21802513,
          name: "Alphan",
          lastname: "Eker",
          email: "alphan.eker@ug.bilkent.edu.tr"
        }
      ],
      search: "",
    }
  },
  methods: {
    deleteAccount(userIndex) {
      if(userIndex > -1) {
        this.users.splice(userIndex, 1);
      }
    },
    confirmDelete(user) {
      return ElMessageBox.confirm(
          'Do you really want to delete this user\'s account?',
          {
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Account deleted.',
        });
        this.deleteAccount(user)
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Delete canceled',
            })
          })
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(
          (data) => {
            return data.name.toLowerCase().includes(this.search.toLowerCase())
          }
      )
    }
  }
}
</script>

<style scoped>
.space {
  margin: 5%;
}
.table {
  width: 100vh;
}
</style>
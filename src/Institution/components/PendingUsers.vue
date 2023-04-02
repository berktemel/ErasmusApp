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
          <el-button type="success" size="small" @click="confirmApproval(scope.$index)">
            Approve
          </el-button>
          <el-button type="danger" size="small" @click="confirmReject(scope.$index)">
            Reject
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
  name: "PendingUsers",
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
          id: 22107132,
          name: "Alphan",
          lastname: "Eker",
          email: "alphan.eker@ug.bilkent.edu.tr"
        }
      ],
      search: "",
    }
  },
  methods: {
    rejectAccount(userIndex) {
      if(userIndex > -1) {
        this.users.splice(userIndex, 1);
      }
    },
    confirmReject(user) {
      return ElMessageBox.confirm(
          'Do you really want to reject and delete this user\'s account?',
          {
            confirmButtonText: 'Reject',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Account deleted.',
        });
        this.rejectAccount(user)
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Canceled',
            })
          })
    },
    approveAccount(userIndex) {
      if(userIndex > -1) {
        this.users.splice(userIndex, 1);
      }
    },
    confirmApproval(user) {
      return ElMessageBox.confirm(
          'Do you really want to approve this user\'s account?',
          {
            confirmButtonText: 'Approve',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Account approved.',
        });
        this.approveAccount(user)
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Canceled',
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
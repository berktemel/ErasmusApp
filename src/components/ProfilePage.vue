<template>

  <StudentNavigationBar v-if="type === 'STUDENT'"/>

  <CoordinatorNavigationBar v-else-if="type === 'COORDINATOR'" />

  <div class="common-layout">
    <el-container>
      <el-header style="width: 100%">

      </el-header>
      <el-container>
        <el-aside width="30%">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span><b>{{user.name}} {{user.lastname}}</b></span>
              </div>
            </template>
            <div>
              <span class="infoLabel"><b>ID No:</b> {{user.id}}</span>
            </div>
            <div>
              <span class="infoLabel"><b>Email:</b> {{user.email}}</span>
            </div>
            <div>
              <span class="infoLabel"><b>Accepted School:</b> {{user.school}} </span>
            </div>
          </el-card>
          <el-card class="box-card" v-if="type === 'COORDINATOR'">
            <template #header>
              <div>My Signature</div>

            </template>
            <div>
              <span style="float: left">{{user.signature}}</span>
              <el-button type="primary" style="float: right">
                Update
              </el-button>
              <el-button type="danger" style="float: right">
                Delete
              </el-button>
            </div>
          </el-card>
        </el-aside>
        <el-main class="main" v-if="type === 'STUDENT'">
          <div><b>My Files</b></div>
          <el-table :data="user.files" class="table" max-height="250">
            <el-table-column prop="name" label="File Name" />
          </el-table>
          <div style="margin-top: 5%"><b>My Requests</b></div>
          <el-table :data="user.requests" class="table">
            <el-table-column prop="code" label="Course Code" />
            <el-table-column prop="bilkent" label="Bilkent" />
            <el-table-column prop="status" label="Status" />
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import StudentNavigationBar from "@/Student/StudentNavbar/StudentNavigationBar";
import CoordinatorNavigationBar from "@/Coordinator/CoordinatorNavbar/CoordinatorNavigationBar";
import {ElContainer, ElHeader, ElAside, ElMain, ElTable, ElTableColumn, ElButton, ElCard} from 'element-plus'
export default {
  name: "ProfilePage",
  components: {
    StudentNavigationBar,
    CoordinatorNavigationBar,
    ElContainer, ElHeader, ElAside, ElMain, ElTable, ElTableColumn, ElButton, ElCard
  },
  data() {
    return {
      user: {
        name: "Berk",
        lastname: "Temel",
        id: 22002675,
        email: "berk.temel@ug.bilkent.edu.tr",
        school: "Blabla University",
        signature: "mysig.pdf",
        requests: [
          {
            code: "cs-xx",
            name: "algo1",
            school: "abroad",
            bilkent: "cs-363",
            status: "Approved"
          },
          {
            code: "cs-yy",
            name: "data str",
            school: "abroad",
            bilkent: "cs-202",
            status: "Rejected"
          },
          {
            code: "math-324",
            name: "prob",
            school: "abroad",
            bilkent: "math230",
            status: "Waiting Response"
          }
        ],
        files: [
          {
            name: "22002675_Preapproval.pdf"
          },
          {
            name: "22002675_LearningAgreement.pdf"
          }
        ],
      },
      type: "",
    }
  },
  mounted() {
    this.type = localStorage.getItem("userType");
  }
}
</script>

<style scoped>
.box-card {
  width: 80%;
  margin: 4%;
  float: right;
}
.infoLabel {
  float: left;
  font-size: 20px;
}
.userLabel {
  float: right;
}
.card-header {
  font-size: 20px;
}
.table {
  max-width: 50%;
  margin: auto;
  font-size: 18px;
}
.main {
  font-size: 20px;
}
</style>
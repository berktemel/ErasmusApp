<template>
  <CoordinatorNavigationBar />
  <el-container>
    <el-main>
      <div><b>Course Approve</b></div>
      <el-card v-for="(request, index) in myRequests" :key="index" class="box-card">
        <div>{{request.code}} --> {{request.bilkent}}</div>
        <div>{{request.school}} --> Bilkent</div>
        <div style="margin-top: 2%">
          <el-button size="small" type="primary" :icon="Edit" @click="viewSyllabusBilkent">Syllabus Bilkent </el-button>
          <el-button size="small" type="primary"  @click="viewSyllabusAbroad">Syllabus Abroad </el-button>
          <el-button size="small" type="success"  @click="confirmApproval(index)">Accept </el-button>
          <el-button size="small" type="danger" @click="confirmReject(index)" >Decline </el-button>
          <el-button size="small" type="primary" @click="sendMail" >Mail</el-button>
        </div>
        
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import CoordinatorNavigationBar from "@/Coordinator/CoordinatorNavbar/CoordinatorNavigationBar";
import {ElMessage, ElMessageBox} from "element-plus";
import {ElContainer, ElMain, ElCard, ElButton} from 'element-plus'
export default {
  name: "RequestCourse",
  components: {
    CoordinatorNavigationBar,
    ElContainer, ElMain, ElCard, ElButton
  },
  data() {
    return {
      myRequests: [
        {
          code: "cs-xx",
          name: "algo1",
          school: "abroad",
          bilkent: "cs-363",
          approved: false,
          responded: true
        },
        {
          code: "cs-yy",
          name: "data str",
          school: "abroad",
          bilkent: "cs-202",
          approved: true,
          responded: true
        },
        {
          code: "math-324",
          name: "prob",
          school: "abroad",
          bilkent: "math230",
          approved: false,
          responded: false
        },
      ]
    }
  },
  methods: {
    acceptRequest(index) {
      this.myRequests.splice(index, 1);
    },
    sendMail() {
        this.redirectPage('/send-mail')
      },
    redirectPage(url) {
        this.$router.replace(url)
    },
    confirmApproval(index) {
      return ElMessageBox.confirm(
          'Do you really want to approve this request?',
          {
            confirmButtonText: 'Approve',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Request approved.',
        });
        this.acceptRequest(index);
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Canceled',
            })
          })
    },
    rejectRequest(index) {
      this.myRequests.splice(index, 1);
    },
    confirmReject(index) {
      return ElMessageBox.confirm(
          'Do you really want to reject this request?',
          {
            confirmButtonText: 'Reject',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Request rejected',
        });
        this.rejectRequest(index);
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Canceled',
            })
          })
    },
  }
}
</script>

<style scoped>
.box-card {
  width: 40%;
  margin: auto;
  margin-top: 2%;
}
</style>
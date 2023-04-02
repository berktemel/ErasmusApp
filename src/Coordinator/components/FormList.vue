<template>
  <CoordinatorNavigationBar/>
  <el-space direction="vertical" class="space">
    <div><b>Form List</b></div>
    <div>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1"
        >
          <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose form"
          >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="8" :xl="1"
        >
          <el-input v-model="sId" size="small" placeholder="Id"/>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="15" :xl="1"
        >
          <el-input v-model="sSurname" size="small" placeholder="Surname"/>
        </el-col>
      </el-row>


    </div>
    <el-table :data="filteredUsers" border stripe height="60vh" class="table">
      <el-table-column prop="form" label="Form" width="200%" sortable/>
      <el-table-column prop="id" label="ID" width="150%" sortable/>
      <el-table-column prop="name" label="Name" sortable/>
      <el-table-column prop="surname" label="Surname" sortable/>
      <el-table-column label="Operations" width="200%">
        <template #default="scope">
          <el-button type="primary" size="small" @click="confirmAccept(scope.$index)">
            Accept
          </el-button>
          <el-button type="primary" size="small" @click="confirmDecline(scope.$index)">
            Decline
          </el-button>
          <div style="margin-top: 2px"></div>
          <el-button type="primary" size="small" @click="sendMail">
            Mail
          </el-button>
          <el-button link type="primary" size="small"
          >Form
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-space>
  <div style="margin-top: 10px">

  </div>
</template>

<script>
import CoordinatorNavigationBar from "@/Coordinator/CoordinatorNavbar/CoordinatorNavigationBar";
import {ElMessage, ElMessageBox} from "element-plus";
import {ElSpace, ElTable, ElTableColumn, ElRow, ElCol, ElSelect, ElOption, ElInput, ElButton} from 'element-plus'
export default {
  name: "FormList",
  components: {
    CoordinatorNavigationBar,
    ElSpace, ElTable, ElTableColumn, ElRow, ElCol, ElSelect, ElOption, ElInput, ElButton
  },
  data() {
    return {
      options: [
        {
          value: 'learning',
          label: 'Learning Agreement',
        },
        {
          value: 'preapproval',
          label: 'Preapproval Form',
        },
        {
          value: 'acceptance',
          label: 'Acceptance Letter',
        },
      ],
      users: [
        {
          id: 21702559,
          form: 'Learning Agreement',
          name: 'Huseyin',
          surname: 'Uzun',
          isApproved: 'false',
          fileSrc: {
            title: "logo.png",
            src: require('../../assets/logo.png')
          }
        },
        {
          id: 21302455,
          form: 'Learning Agreement',
          name: 'Berk',
          surname: 'Temel',
          isApproved: 'false'
        },
        {
          id: 21624575,
          form: 'Preapproval Form',
          name: 'Barkın',
          surname: 'Saday',
          isApproved: 'false'
        },
        {
          id: 21802359,
          form: 'Acceptance Letter',
          name: 'Alphan',
          surname: 'Eker',
          isApproved: 'false'
        },
        {
          id: 22002559,
          form: 'Acceptance Letter',
          name: 'Leyla',
          surname: 'Uzun',
          isApproved: 'false'
        },
        {
          id: 21702914,
          form: 'Acceptance Letter',
          name: 'Saad',
          surname: 'Khan',
          isApproved: 'false'
        },
        {
          id: 22702514,
          form: 'Acceptance Letter',
          name: 'Buğra',
          surname: 'Karahan',
          isApproved: 'false'
        },
      ],
      search: "",
      sId: "",
      sSurname: "",
    }
  },
  methods: {
    deleteForm(userIndex) {
      if (userIndex > -1) {
        this.users.splice(userIndex, 1);
      }
    },
    sendMail() {
      this.redirectPage('/send-mail')
    },
    confirmDecline(user) {
      return ElMessageBox.confirm(
          'Do you really want to decline this form?',
          {
            confirmButtonText: 'Decline',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Form is declined.',
        });
        this.deleteForm(user)
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Delete canceled',
            })
          })
    },
    confirmAccept(user) {
      return ElMessageBox.confirm(
          'Do you really want to accept this form?',
          {
            confirmButtonText: 'Accept',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'Form is accepted.',
        });
        this.deleteForm(user)
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Accept canceled',
            })
          })
    },
    redirectPage(url) {
      this.$router.replace(url)
    },

  },
  computed: {
    filteredUsers() {
      return this.users.filter(
          (data) => {
            return data.surname.toLowerCase().includes(this.sSurname.toLowerCase())
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
  width: 140vh;
}

.bilkentLogo {
  float: left;
}
</style>
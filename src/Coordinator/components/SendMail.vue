<template>
  <StudentNavigationBar v-if="type === 'STUDENT'"/>

  <CoordinatorNavigationBar v-else-if="type === 'COORDINATOR'"/>
  <div class="common-layout">
    <el-container>
      <el-aside class="space">
        <el-form :model="form" style="padding: 0 0 0 0;" label-position="top">

          <el-form-item label="To" class="formItem">
            <div>
              <el-input v-model="form.to" placeholder="Mail"/>
            </div>
          </el-form-item>

          <el-form-item label="Subject">
            <el-input v-model="form.subject" placeholder="Subject"/>
          </el-form-item>
          <el-form-item label="Mail">

            <el-input v-model="form.body" :autosize="{ minRows: 14, maxRows: 30 }" type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Send</el-button>
          </el-form-item>
        </el-form>
      </el-aside>
      <el-main>
        <el-upload
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            limit="3"
            :on-exceed="handleExceed"
            :auto-upload="false"
        >
          <template #trigger>
            <el-button type="primary">select file</el-button>
          </template>
          <el-button v-if="false" class="ml-3" type="success" @click="submitUpload">
            upload to server
          </el-button>
          <template #tip>
            <div class="el-upload__tip text-red">
              upload a pdf file
            </div>
          </template>
        </el-upload>
      </el-main>
    </el-container>
  </div>

  <!-- <input id="files" type="file" accept="application/pdf"
             @change="onChange"
             @error="onError"
      > -->

</template>

<script>
import CoordinatorNavigationBar from "@/Coordinator/CoordinatorNavbar/CoordinatorNavigationBar";
import StudentNavigationBar from "@/Student/StudentNavbar/StudentNavigationBar";
import {ElMessage} from 'element-plus'
import {ElContainer, ElAside, ElForm, ElMain, ElButton, ElInput, ElFormItem, ElUpload} from 'element-plus'
export default {
  name: "SendMail",
  components: {
    CoordinatorNavigationBar,
    StudentNavigationBar,
    ElContainer, ElAside, ElForm, ElMain, ElButton, ElInput, ElFormItem, ElUpload
  },
  data() {
    return {

      form: {
        to: "",
        subject: "",
        body: "",
      },
      file: null,
      fileList: [],
      type: ""
    }
  },
  methods: {
    onChange(e) {
      console.log(e.target.files[0]);
      this.file[0] = e.target.files[0];

    },
    onError() {
      return ElMessage.error('error');
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-10)
    }
  },
  mounted() {
    this.type = localStorage.getItem("userType");
  }
}

</script>

<style scoped>
.space {
  margin: 5%;
  margin-top: 2%;
  width: 50%;
}

.table {
  margin: 5%;
  width: 100vh;
}

.formItem {
  padding: 0 0 0 0;
}
</style>
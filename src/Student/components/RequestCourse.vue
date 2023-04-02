<template>
  <StudentNavigationBar />
  <el-container>
    <el-aside width="40%" style="margin: 5%;">
      <div>
        <b>Course Request Form</b>
      </div>
      <el-form
          :model="course"
          status-icon
          label-width="65%"
          class="demo-ruleForm"
          style="margin: 5%;float: left;"
      >
        <el-form-item label="Course Code" prop="code">
          <el-input v-model="course.code" type="text" autocomplete="off" />
          <span v-if="isEmpty.code" class="errorMsg">Course code cannot be empty!</span>
        </el-form-item>
        <el-form-item label="Course Name" prop="name">
          <el-input v-model="course.name" type="text" autocomplete="off"/>
          <span v-if="isEmpty.name" class="errorMsg">Course name cannot be empty!</span>
        </el-form-item>
        <el-form-item label="School Name" prop="school">
          <el-input v-model="course.school" />
          <span v-if="isEmpty.school" class="errorMsg">School cannot be empty!</span>
        </el-form-item>
        <el-form-item label="Bilkent Equivalent" prop="bilkent">
          <el-input v-model="course.bilkent" />
          <span v-if="isEmpty.bilkent" class="errorMsg">Equivalent Course cannot be empty!</span>
        </el-form-item>
        <el-form-item label="Syllabus Link for Course" prop="syllabus">
          <el-input v-model="course.link" />
          <span v-if="isEmpty.link" class="errorMsg">Syllabus link cannot be empty!</span>
        </el-form-item>
        <el-form-item label="Syllabus Link for Bilkent Equivalent" prop="syllabusBilkent">
          <el-input v-model="course.bilkentLink" />
          <span v-if="isEmpty.bilkentLink" class="errorMsg">Syllabus cannot be empty!</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" style="margin-bottom: 5%;">
            Submit
          </el-button>
          <el-button @click="resetForm()">
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </el-aside>
    <el-main>
      <b>My Requests</b>
      <el-card v-for="(request, index) in myRequests" :key="index" class="box-card">
        <div>{{request.code}} --> {{request.bilkent}}</div>
        <div>{{request.school}} --> Bilkent</div>
        <div>Status:
          <span v-if="request.status === 'Approved'" style="color: green">Approved</span>
          <span v-else-if="request.status === 'Rejected'" style="color: red">Rejected</span>
          <span v-else style="color: darkblue">Waiting response</span>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import StudentNavigationBar from "@/Student/StudentNavbar/StudentNavigationBar";
import {ElCard,ElContainer,ElMain,ElAside,ElFormItem,ElForm,ElButton,ElInput} from 'element-plus'
export default {
  name: "RequestCourse",
  components: {
    StudentNavigationBar,
    ElCard,ElContainer,ElMain,ElAside,ElFormItem,ElForm,ElButton,ElInput
  },
  data() {
    return {
      course: {
        code: "",
        name: "",
        school: "",
        bilkent: "",
        link: "",
        bilkentLink: ""
      },
      isEmpty: {
        code: false,
        name: false,
        school: false,
        bilkent: false,
        link: false,
        bilkentLink: false
      },
      myRequests: [
        {
          code: "cs-xx",
          name: "algo1",
          school: "Blabla University",
          bilkent: "cs-363",
          status: "Rejected"
        },
        {
          code: "cs-yy",
          name: "data str",
          school: "Blabla University",
          bilkent: "cs-202",
          status: "Approved"
        },
        {
          code: "math-324",
          name: "prob",
          school: "Blabla University",
          bilkent: "math230",
          status: "Waiting Response"
        },
      ]
    }
  },
  methods: {
    submitForm() {
      this.checkEmpty();

    },
    checkEmpty() {
      if(this.course.code === "") {
        this.isEmpty.code = true;
      }
      if(this.course.name === "") {
        this.isEmpty.name = true;
      }
      if(this.course.school === "") {
        this.isEmpty.school = true;
      }
      if(this.course.bilkent === "") {
        this.isEmpty.bilkent = true;
      }
      if(this.course.link === "") {
        this.isEmpty.link = true;
      }
      if(this.course.bilkentLink === "") {
        this.isEmpty.bilkentLink = true;
      }
    },
    resetForm() {
      this.course = {
        code: "",
        name: "",
        school: "",
        bilkent: "",
        link: "",
        bilkentLink: ""
      };
    }
  }
}
</script>

<style scoped>
.errorMsg {
  color: red;
  font-size: 10px;
}
.box-card {
  width: 60%;
  margin: auto;
  margin-top: 2%;
}
</style>
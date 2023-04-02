<template>
  <StudentNavigationBar />

  <el-space direction="vertical" class="space" style="float: left">
    <div><b>Approved Courses</b></div>
    <el-table :data="filteredApprovedList" border stripe height="30vh" class="table">
      <el-table-column prop="code" label="Course Code" />
      <el-table-column prop="name" label="Course Name" />
      <el-table-column prop="school" label="School" />
      <el-table-column prop="ects" label="ECTS" />
      <el-table-column prop="bilkent" label="Bilkent Equivalent" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="approvedListSearch" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" type="primary" @click="addToSelected(scope.row)">
            Add to Selected
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-space>

  <el-space direction="vertical" class="space" style="float: left">
    <div><b>Rejected Courses</b></div>
    <el-table :data="filteredRejectedList" border stripe height="30vh" class="table" >
      <el-table-column prop="code" label="Course Code" />
      <el-table-column prop="name" label="Course Name" />
      <el-table-column prop="school" label="School" />
      <el-table-column prop="bilkent" label="Bilkent Equivalent" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="rejectedListSearch" size="small" placeholder="Type to search" />
        </template>
      </el-table-column>
    </el-table>
  </el-space>

  <el-space direction="vertical" class="space">
    <div><b>Selected Courses</b></div>
    <el-table :data="filteredSelectedList" border stripe height="30vh" class="table" style="width: 80vh;">
      <el-table-column prop="code" label="Course Code" />
      <el-table-column prop="name" label="Course Name" />
      <el-table-column prop="school" label="School" />
      <el-table-column prop="ects" label="ECTS" />
      <el-table-column prop="bilkent" label="Bilkent Equivalent" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="selectedListSearch" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" type="danger" @click="removeCourse(scope.row)">
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="sendForApproval">
      Send
    </el-button>
  </el-space>
</template>

<script>
import StudentNavigationBar from "@/Student/StudentNavbar/StudentNavigationBar";
import {ElMessage} from "element-plus";
import {ElSpace, ElTable, ElTableColumn, ElButton, ElInput} from 'element-plus'
export default {
  name: "CoursesPage",
  components: {
    StudentNavigationBar,
    ElSpace, ElTable, ElTableColumn, ElButton, ElInput
  },
  data() {
    return {
      approved: [
        {
          code: 'CS-XX',
          name: 'abroad',
          school: 'Blabla University',
          bilkent: 'CS319',
          ects: 5
        },
        {
          code: 'ME-XX',
          name: 'abroad',
          school: 'Blabla University',
          bilkent: 'ME325',
          ects: 3
        },
        {
          code: 'ME-XX',
          name: 'abroad',
          school: 'Blabla University',
          bilkent: 'ME325',
          ects: 3
        },
        {
          code: 'ME-XX',
          name: 'abroad',
          school: 'Blabla University',
          bilkent: 'ME325',
          ects: 3
        },
        {
          code: 'ME-XX',
          name: 'abroad',
          school: 'Blabla University',
          bilkent: 'ME325',
          ects: 3
        },
      ],
      rejected: [
        {
          code: 'CS-asd',
          name: 'abroad',
          school: 'Blabla University',
          bilkent: 'CS315'
        }
      ],
      selected: [],
      approvedListSearch: "",
      rejectedListSearch: "",
      selectedListSearch: "",
    }
  },
  methods: {
    addToSelected(course) {
      if(this.findIndex(this.selected, course) === -1) {
        this.selected[this.selected.length] = course;
        return ElMessage.success('Course added.');
      } else {
        return ElMessage.error('This course is already selected.');
      }
    },
    removeCourse(course) {
      let index = this.findIndex(this.selected, course);
      if(index > -1) {
        this.selected.splice(index, 1);
        return ElMessage.success('Course removed.');
      }
    },
    findIndex(array, object) {
      for(let i = 0; i < array.length; i++) {
        if(array[i].code === object.code) {
          return i;
        }
      }
      return -1;
    },
    sendForApproval() {

      return ElMessage.success('Course list is sent for approval.')
    }
  },
  computed: {
    filteredApprovedList() {
      return this.approved.filter(
          (data) => {
            return data.code.toLowerCase().includes(this.approvedListSearch.toLowerCase())
          }
      )
    },
    filteredRejectedList() {
      return this.rejected.filter(
          (data) => {
            return data.code.toLowerCase().includes(this.rejectedListSearch.toLowerCase())
          }
      )
    },
    filteredSelectedList() {
      return this.selected.filter(
          (data) => {
            return data.code.toLowerCase().includes(this.selectedListSearch.toLowerCase())
          }
      )
    }
  }
}
</script>

<style scoped>
.space {
  margin: 3%;
  width: 40%;
}
.table{
  width: 75vh;
}

</style>
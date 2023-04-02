<template>
  <CoordinatorNavigationBar/>
  <el-space direction="vertical" class="space">
    <div><b>ToDoList</b></div>
    <el-table :data="filteredTasks" border stripe height="60vh" class="table">
      <el-table-column fixed prop="task" label="Task" width="800"/>
      <el-table-column fixed prop="operation" label="Operation">
        <template #default="scope">
          <el-button assign=right type="primary" size="small" @click="confirmDone(scope.$index)">
            Done
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-row :gutter="5">
        <el-col>
          <input type="text" placeholder="New Task" v-model="newTask" @keyup.enter="addTask" width="300"/>
        </el-col>
        <el-col>
          <div style="margin-top: 5px"></div>
          <el-button type="primary" size="small" @click="addTask">
            Add
          </el-button>
        </el-col>
      </el-row>
    </div>

  </el-space>
</template>

<script>
import CoordinatorNavigationBar from "@/Coordinator/CoordinatorNavbar/CoordinatorNavigationBar";
import {ElMessage, ElMessageBox} from "element-plus";
import {ElSpace, ElTable, ElTableColumn, ElRow, ElCol, ElButton} from 'element-plus'
export default {
  name: "ToDoList",
  components: {
    CoordinatorNavigationBar,
    ElSpace, ElTable, ElTableColumn, ElRow, ElCol, ElButton
  },
  data() {
    return {
      newTask: "",
      users: [
        {
          task: "check the PreApproval Form"
        },
        {
          task: "get contact with students going to universities in france "
        }
      ],
      search: "",
    }
  },
  methods: {

    addToTasks(course) {
      if (this.findIndex(this.task, course) === -1) {
        this.task[this.task.length] = course;
        return ElMessage.success('Course added.');
      }
    },
    deleteTask(userIndex) {
      if (userIndex > -1) {
        this.users.splice(userIndex, 1);
      }
    },
    confirmDone(user) {
      return ElMessageBox.confirm(
          'The task will be deleted. Are you sure?',
          {
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      ).then(() => {
        ElMessage({
          type: 'success',
          message: 'The task is done.',
        });
        this.deleteTask(user)
      })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Deletion canceled',
            })
          })
    },
    addTask() {
      if (this.newTask) {
        this.users.push({
          task: this.newTask
        })
        this.newTask = "";
      }
    }
  },
  computed: {
    filteredTasks() {
      return this.users.filter(
          (data) => {
            return data.task.toLowerCase().includes(this.search.toLowerCase())
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
  width: 120vh;
}
</style>
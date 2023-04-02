<template>
  <StudentNavigationBar/>
  <el-space direction="horizontal" style="margin-top: 6%">
    <FormCard card-name="Preapproval Form" />
    <span style="margin: 5%"></span>
    <FormCard card-name="Learning Agreement" />
    <span style="margin: 5%"></span>
    <FormCard card-name="Acceptance Letter" />
  </el-space>
  <el-table :data="files" style="width: 30%; margin: auto; margin-top: 5%;" max-height="250">
    <el-table-column prop="name" label="File Name" />
    <el-table-column fixed="right" label="" width="120">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import StudentNavigationBar from "@/Student/StudentNavbar/StudentNavigationBar";
import FormCard from "@/Student/components/FormCard";
import {ElSpace, ElTableColumn, ElTable, ElButton} from 'element-plus'
export default {
  name: "FormPage",
  components: {
    StudentNavigationBar,
    FormCard,
    ElSpace, ElTableColumn, ElTable, ElButton
  },
  data() {
    return {
      files: [
        {
          name: "22002675_Preapproval.pdf"
        },
        {
          name: "22002675_LearningAgreement.pdf"
        }
      ],
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 30%;
}

.column {

}

.row {
  margin: 3%;
}
</style>
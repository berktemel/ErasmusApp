<template>
  <el-card class="box-card" style="width: 100%;">
    <template #header>
      <div class="card-header">
        <span><b>{{ cardName }}</b></span>
      </div>
    </template>
    <div class="card-body">
      <div v-if="isUploaded" class="uploadInfo" style="color: green;">Uploaded</div>
      <div v-else class="uploadInfo" style="color: red">Not Uploaded</div>
      <div v-if="isApproved" class="approvalInfo" style="color: green;">Approved</div>
      <div v-else class="approvalInfo" style="color: red">Not Approved</div>

      <input id="files" type="file" accept="application/pdf"
             @change="onChange"
             @error="onError"
      >
      <el-button type="primary" @click="uploadFile()">
        Upload
      </el-button>
    </div>
  </el-card>

</template>

<script>
import {ElMessage, ElMessageBox} from 'element-plus'
import {ElCard, ElButton} from 'element-plus'
export default {
  name: "FormCard",
  components: {
    ElCard, ElButton
  },
  data() {
    return {
      isUploaded: false,
      isApproved: false,
      file: {},
    }
  },
  props: {
    cardName: String,
  },
  methods: {
    onChange(e) {
      console.log(e.target.files[0]);
      this.file = e.target.files[0];

    },
    onError() {
      return ElMessage.error('error');
    },
    uploadFile() {
      this.isUploaded = true;
      return ElMessage({
        message: 'Upload successful',
        type: 'success'
      });
    },
    removeFile() {
      return ElMessageBox.confirm(
        'Do you really want to delete this file?',
          {
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: 'File deleted.',
            });
            this.isUploaded = false;
            this.file.splice(0, 1);
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Delete canceled',
            })
          }
      )
    }
  },
  computed: {
    fileExists() {
      return this.file.length > 0;
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.uploadInfo {
  margin: 15px;
}

.approvalInfo {
  margin: 25px;
}
</style>
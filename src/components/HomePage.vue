<template>
  <StudentNavigationBar v-if="user === 'STUDENT'" />
  <CoordinatorNavigationBar v-else-if="user === 'COORDINATOR'" />
  <InstitutionNavigationBar v-else-if="user === 'INSTITUTION'" />
</template>

<script>
import StudentNavigationBar from "@/Student/StudentNavbar/StudentNavigationBar";
import CoordinatorNavigationBar from "@/Coordinator/CoordinatorNavbar/CoordinatorNavigationBar";
import InstitutionNavigationBar from "@/Institution/InstitutionNavbar/InstitutionNavigationBar";
export default {
  name: "HomePage",
  components: {
    StudentNavigationBar,
    InstitutionNavigationBar,
    CoordinatorNavigationBar
  },
  data() {
    return {
      user: ""
    }
  },
  methods: {
    redirectPage(url) {
      this.$router.replace(url);
    }
  },
  mounted() {
    this.user = localStorage.getItem("userType");
    if(this.user === 'STUDENT') {
      this.redirectPage('/forms');
    } else if(this.user === 'INSTITUTION') {
      this.redirectPage('/approved-users');
    }else if(this.user === 'COORDINATOR') {
      this.redirectPage('/form-list');
    }
  }
}
</script>

<style scoped>

</style>
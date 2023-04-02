<template>
  <body>
  <h1>Login</h1>
  <div>
    <h3>Username:</h3>
    <label>
      <input v-model="user.username" type="text" placeholder="Username">
    </label>
  </div>
  <div>
    <h3>Password:</h3>
    <label>
      <input v-model="user.password" type="password" placeholder="password">
    </label>
  </div>
  <div v-if="wrong">You entered email or password wrong.</div>
  <div v-if="!isVerified">You can't login until an admin verifies your account.</div>
  <div class="bottomPart">
    <button @click="checkUser()">Login</button>
  </div>
  <div class="bottomPart">
    <button class="forgotPassword" @click="forgotPwPopup">Forgot password?</button>
  </div>
  <div class="bottomPart">
    <button @click="redirectPage('/signup')">Signup</button>
  </div>
  </body>
</template>

<script>
import {ElMessage, ElMessageBox} from "element-plus";
import UserService from "@/services/UserService";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      
      wrong: false,
      isVerified: true,
      checkLogin: true,
    }
  },
  methods: {
    redirectPage(url) {
      this.$router.replace(url);
    },
    checkUser() {
      /*if(this.checkLogin) {
        localStorage.setItem("userType", "STUDENT");
        this.redirectPage('/');
      } else {
        this.wrong = true;
      }*/
      UserService.login(this.user)
      .then(response => {
        console.log(response)
        if(response.status == 200) {
          let role = response.data._role
          let roleUI = String (role).toUpperCase();
          localStorage.setItem("userType", roleUI);
          localStorage.setItem("typeBackend", role);
          let name = response.data._name
          localStorage.setItem("name", name);
          this.redirectPage('/')
        }
      });
      
    },
    forgotPwPopup() {
      return ElMessageBox.prompt('Please type your e-mail', 'Forgot My Password', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
      })
          .then(() => {
            ElMessage({
              type: 'success',
              message: `A link to change your password is sent to your email.`,
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Input canceled',
            })
          })
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px;
  font-size: 15px;
  width: 120px;
  margin: 20px;
}
body {
  text-align: center;
}
input {
  padding: 10px;
  font-size: 17px;
}
.bottomPart {
  margin-bottom: 15px;
}
.forgotPassword {
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
  width: 30%;
  margin: 0 auto;
}
</style>
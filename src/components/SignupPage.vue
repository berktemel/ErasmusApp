<template>
  <body class="signup-form">
  <h1>Signup</h1>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="userInfo.name"/>
    <span v-if="isEmpty.name" class="errorMsg">Name cannot be empty!</span>
    <br/>
    <label for="number">ID Number:</label>
    <input type="text" id="number" v-model="userInfo.id"/>
    <span v-if="isEmpty.number" class="errorMsg">ID Number cannot be empty!</span>
    <br/>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="userInfo.email"/>
    <span v-if="isEmpty.email" class="errorMsg">Email cannot be empty!</span>
    <br/>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="userInfo.password"/>
    <span v-if="isEmpty.password" class="errorMsg">Password cannot be empty!</span>
    <span v-if="!validPw" class="errorMsg">Password should be at least 6 characters.</span>
    <br/>
    <input type="radio" v-model="type" value="Student">Student
    <input type="radio" v-model="type" value="Coordinator">Coordinator
    <div v-if="isEmpty.type" class="errorMsg">Please select if you are Student or Coordinator</div>
    <button type="submit" @click="submit">Submit</button>
    <button @click="backToLogin">Cancel</button>
  </form>
  </body>
</template>

<script>
import {ElMessageBox} from "element-plus";
import UserService from "@/services/UserService";
export default {
  name: "SignupPage",
  components: {
    
  },
  data() {
    return {
      userInfo: {
        name: "",
        email: "",
        password: "",
        id: ""
      },
      type: "",
      isEmpty: {
        email: false,
        password: false,
        name: false,
        number: false,
        type: false
      },
      validPw: true
    }
  },
  methods: {
    backToLogin() {
      this.$router.replace('/login');
    },
    submit() {
      this.checkEmpty();
      if(this.type === 'Student') {
        UserService.signupStudent(this.userInfo)
          .then(response => {
          console.log(response)
        });
      } else if(this.type === 'Coordinator') {
        console.log();
      }
      ElMessageBox.alert('Account created successfully, but you have to wait for an admin to approve' +
          ' your account to be able to login.', 'Important Information', {
        callback: this.backToLogin
      });
    },
    checkEmpty() {
      if(this.userInfo.name === "") {
        this.isEmpty.name = true;
      }
      if(this.userInfo.studentNo === "") {
        this.isEmpty.studentNo = true;
      }
      if(this.userInfo.email === "") {
        this.isEmpty.email = true;
      }
      if(this.userInfo.password === "") {
        this.isEmpty.password = true;
      }
      if(this.userInfo.type === "") {
        this.isEmpty.type = true;
      }
    }
  }
}
</script>

<style scoped>
.signup-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
}

.signup-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}

.signup-form h2 {
  margin: 0 0 15px;
}

.signup-form label {
  display: block;
  margin-bottom: 8px;
}

.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.signup-form button[type="submit"] {
  width: 100%;
  padding: 12px;
  background: #4CAF50;
  border: 1px solid #4CAF50;
  color: white;
  margin-bottom: 15px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
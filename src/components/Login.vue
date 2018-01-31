<template>
  <div id="login">
    <h1 class="mb-4">Welcome, {{owner}}!</h1>
    <h2> {{ title }} </h2>
    <img src="../assets/m-pink.png">
    <div class="login-form">
      <h3 class="mb-3">Admin Login</h3>
      <input v-model="email" type="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <b-button type="submit" @click.prevent="login">Login</b-button>

      <p style="color:red; font-size:30px">{{error}}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Login',

  data(){
    return {
      title: 'Admin Panel - K Mitchell Media',
      owner: 'Kathryn',
      email:"",
      password: "",
      error: ""
    }
  },
  methods:{
    login:function(){
      axios.post('/letmein', {email: this.email, password:this.password}).then((res)=>{
        console.log(res);
        this.$router.push('/dashboard');
      }).catch(()=>{
        this.error = "Invalid Login Credentials. Please try again!"
      })
    }
  }
}
</script>




<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dddddd;
  font-weight: normal;
  background-color: #333333;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  margin-bottom: 1px;
  padding-left: 10px;
  height: 35px;
  width: 300px;
  border: 2px solid #cccccc;
  border-radius: 3px;
}

button {
  margin-top: 25px;
  height: 35px;
  width: 300px;
  border: 2px solid #cccccc;
  border-radius: 3px;
  background-color: lightgreen;
}

h1 {
  padding-top: 60px;
  font-weight: normal;
}

h3 {
  font-weight: normal;
}


</style>

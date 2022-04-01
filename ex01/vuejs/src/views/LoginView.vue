<script>
import Login from '@/components/login.vue';
// import { useCookies } from "vue3-cookies"
export default {
  components: {
    Login
  },
  data() {
    return {
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async onSubmit() {
       if(this.email == "" && this.password == 0) { 
         
         var element = document.getElementById("err");
         element.innerHTML = `<h2>Your information incorrect</h2>`
        
    }
    else{
      const req = {
        method: "POST",
        credentials: "include",
        headers: { 
          "Content-Type": "application/json",  
          "Access-Control-Allow-Credentials": true, 
        },
        body: JSON.stringify({ 
          email: this.email, 
          password: this.password 
        }),  
      };

      const res = await fetch("http://localhost:3001/login",req);
      const result = await res.json();
       
      if (result.suscess == true) {
       
        this.$router.push({ path: '/home' });
      }else {
        console.log('Error logging in');
      }
    }         
    },
  },
};
</script>

<template>
  <main>
    <Login />
  </main>
</template>




<script>
import Signup from '@/components/signup.vue'

export default {
  components: {
    Signup
  },
  data(){
    return {
        email:'',
        username:'',
        firstName:'',
        lastName:'',
        password:'',
        repeat_password:'',
        msg:'',
    };
  },
  methods: {
    async onSubmit(){
        const req = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
              email: this.email,
              username: this.username,
              firstName: this.firstName,
              lastName: this.lastName,
              password: this.password,
              repeat_password: this.repeat_password
          }),
      };

      const res = await fetch("http://localhost:3001/register", req);
      const result = await res.json();
      console.log("data: ", result);

      if (!result.success) {
        alert(result.error);
        return;
      }else {
          this.email = '';
          this.username = '';
          this.lastName = '';
          this.firstName = '';
          this.password = '';

          this.$router.push({ path:'/login' });
      }
    }
  },
};
</script>

<template>
  <main>
    <Signup />
  </main>
</template>

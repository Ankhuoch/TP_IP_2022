<script>
import Home from '@/components/home.vue';

export default {
  components: {
    Home
  },
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    const req = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(),
    };
    
    console.log(req);

    const res = await fetch("http://localhost:3001/me", req);
    const result = await res.json();
    console.log("data: ", result);
    this.data = result;
  },
  methods: {
    async onSubmit() {  
        const req = {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(),
        };
        const res = await fetch("http://localhost:3001/logout", req);
        const result = await res.json();
        console.log("data: ", result);
        this.$router.push('/login');
    },
  }
};
</script>

<template>
  <main>
    <Home />
  </main>
</template>
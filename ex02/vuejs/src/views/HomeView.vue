<script>
import Home from '@/components/Homepage.vue';

export default {
    components: {
        Home
    },
    data(){
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
        const res = await fetch("http://localhost:3001/product", req);
        const result = await res.json();
        console.log("data: ", result);
        this.data = result;
    },
};

</script>

<template>
    <div>
        <Home></Home>
    </div>
</template>
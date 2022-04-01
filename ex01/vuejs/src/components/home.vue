<template>
    <div class="home">
        <div><h1>You're in Home Page</h1></div>
        <p>Well done🥰</p>
        <!-- <p>Username: {{username}}</p> -->
        <label v-if="data != null"> Username : {{ data.data.username }}</label><br>
        <label v-if="data != null"> Firstname: {{ data.data.firstname }}</label><br>
        <label v-if="data != null"> Lastname : {{ data.data.lastname }}</label><br>
        <label v-if="data != null"> Email    : {{ data.data.email }}</label><br><br><br><br><br>

        <button type="submit" @click="onSubmit">Log Out</button>
    </div>
</template>


<style>
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
  }
</style>
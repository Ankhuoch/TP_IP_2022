<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
    <form action="">
        <div class="img">
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
        </div>
        <div class="container">
            <label for="email">Username</label>
            <input type="text" placeholder="Enter email" name="email" required>
            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<style>
  form {
    border: 2px solid #f1f1f1;
  }
  .container {
    padding: 16px;
  }
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    background: rgb(226, 225, 225);
    box-sizing: border-box;
  }
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }
</style>
<template>
  <div class="register">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
    <form action="">
        <div class="container">
            <label for="email">Email</label>
            <input type="text" placeholder="Enter Email" name="email" required>
            <label for="uname">Username</label>
            <input type="text" placeholder="Username" name="uname" required>
            <label for="fname">First name</label>
            <input type="text" placeholder="First Name" name="fname" required>
            <label for="lname">Last name</label>
            <input type="text" placeholder="Last Name" name="lname" required>
            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <br>
            <br>
            <div>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy.</a></div>
            <button type="submit">Sign Up</button>
        </div>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .register {
    min-height: 80vh;
    padding: 16px;
    border: 2px solid #f1f1f1;
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
}
</style>
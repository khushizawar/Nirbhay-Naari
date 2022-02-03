
const loginForm = document.getElementById("logform");
const loginButton = document.getElementById("logbut");
const emailid = loginForm.emailid;
const password = loginForm.password;

loginButton.addEventListener("click", function() {
   if (emailid.value === "user@123" && password.value === "user") {
     alert("You have successfully logged in.");

    }else{
       alert("Password is incorrect!");
  }
});

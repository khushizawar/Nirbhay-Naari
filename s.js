alert("Hey")
const signupForm = document.getElementById("signupform");
const signButton = document.getElementById("signbutton")
const fullname = signupForm.fullname
const email = signupForm.emailid
const password = signupForm.password
const cpassword = signupForm.cpassword

signButton.addEventListener("click", function() {
  if (fullname.value == "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (password.value == "") {
    alert("Please enter your password");
    password.focus();
    return false;
  }
  if (cpassword.value == "") {
    alert("Please enter your password again");
    cpassword.focus();
    return false;
  }

if (password.value === cpassword.value) {
    alert("success")
  }

  return true;
});

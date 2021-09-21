console.log("success")
function formValidation(){
  var Email = document.getElementById('Email').value;
  var Password= document.getElementById('Password').value;

  if (Email == "") {
  //  block of code to be executed if condition1 is true
  alert("Please enter the email address.")
  window.location="Login.html"
} else if (Password=="") {
  alert("Enter your password.")
  window.location="Login.html"
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
  window.location="home.html"

}
}


function startCounter(){
  console.log("hello")
  let num = 10
  let total = 0
  for (let i = 0; i <= 10; i++) {
    setTimeout(function timer() {
      let total = num -i
      document.getElementById("timer").innerHTML = num-i + "seconds"
      if (total == 0 ){
        document.getElementById("show").innerHTML = "let's start"
      }
    }, i * 1000);
  }
  }

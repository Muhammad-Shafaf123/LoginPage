/*function for form validation*/
function formValidation() {
    var Email = document.getElementById('email_address').value;
    var Password= document.getElementById('password_field').value;
    if (Email == "") {
    alert("Please enter the email address.");
    window.location="Login.html";
    } else if (Password=="") {
    alert("Enter your password.");
      window.location="Login.html";
    } else {
      window.location="home.html";
    }
}
/* function for counting, when the user login */
function startCounter(){
    let seconds = 10;
    let total = 0;
    for (let i = 0; i <= 10; i++) {
      setTimeout(function timer() {
        let total = seconds -i;
        document.getElementById("timer").innerHTML =  "00 : "+total;

      }, i * 1000);
    }
  }

// login form
function check_login() {
  let uname = document.form1.username.value;
  if (uname == "") {
    document.getElementById("msg1").innerHTML = "Enter username or email-id";
    document.form1.username.focus();
    return false;
  }
  let pass = document.form1.pass.value;
  if (pass == "") {
    document.getElementById("msg2").innerHTML = "Enter Password";
    return false;
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
      pass
    )
  ) {
    return true;
  } else {
    document.getElementById("msg3").innerHTML =
      "8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    return false;
  }
}
function hide_show_pass() {
  let pword = document.getElementById("pwd");
  if (pword.type == "password") {
    pwd.type = "text";
  } else {
    pword.type = "password";
  }
}

// registration form
function form_valid() {
  let fname = document.form2.fname.value;
  if (fname == "" || fname == null) {
    document.getElementById("mss1").innerHTML = "Enter first name";
    return false;
  }
  let mname = document.form2.mname.value;
  if (mname == "" || mname == null) {
    document.getElementById("mss2").innerHTML = "Enter Middle Name";
    return false;
  }
  let lname = document.form2.lname.value;
  if (lname == "" || lname == null) {
    document.getElementById("mss3").innerHTML = "Enter Middle Name";
    return false;
  }
  let male = document.form2.gen[0].checked;
  let female = document.form2.gen[1].checked;
  if (male == false && female == false) {
    document.getElementById("mss4").innerHTML = "Select Gender";
    return false;
  }
  let c1 = document.form2.c1.checked;
  let c2 = document.form2.c2.checked;
  let c3 = document.form2.c3.checked;
  if (c1 == false && c2 == false && c3 == false) {
    document.getElementById("mss5").innerHTML = "Select Qualification";
    return false;
  }
  let state = document.form2.state.value;
  if (state == "-1") {
    document.getElementById("mss6").innerHTML = "Select State";
    return false;
  }
  let city = document.form2.city.value;
  if (city == "-1") {
    document.getElementById("mss7").innerHTML = "Select City";
    return false;
  }
  let pin = document.form2.pin.value;
  if (pin == "") {
    document.getElementById("mss8").innerHTML = "Enter Pincode";
    return false;
  } else if (isNaN(pin)) {
    document.getElementById("mss9").innerHTML = "Alphabet not Allowed";
    return false;
  }
  let add = document.form2.add.value;
  if (add == "") {
    document.getElementById("mss10").innerHTML = "Enter Address";
    return false;
  }
  let email = document.form2.email.value;
  if (email == "") {
    document.getElementById("mss11").innerHTML = "Enter username";
    return false;
  }
  let pass2 = document.form2.pass2.value;
  if (pass2 == "") {
    document.getElementById("mss12").innerHTML = "Enter Password";
    return false;
  }
}

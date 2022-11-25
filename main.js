const passwords = document.querySelectorAll('input[type="password"]');
console.log(passwords);

function checkPassword() {
  if(passwords[0].value !== passwords[1].value) {
    console.log("INVALID");
    passwords[0].setCustomValidity("Passwords do not match");
    // passwords[0].setAttribute("isValid","false");
  }
    else {
      console.log("INVALID");
      passwords[0].setCustomValidity('');
      passwords[1].setCustomValidity('');
      // passwords[0].setAttribute("isValid","true");
    }
}

passwords[0].addEventListener("input", checkPassword);
passwords[1].addEventListener("input", checkPassword);


const submit_button = document.querySelector("form .form_button");
submit_button.addEventListener("click", () => {
  let result = document.querySelector('form .form_result p');
  if(document.querySelector("form").checkValidity()){
    result.textContent = "Your account will be created!";
    submit_button.style.backgroundColor = "green";
  }
    else {
    submit_button.style.backgroundColor = "red";
    result.textContent = "Your account will not be created!";
  }
})

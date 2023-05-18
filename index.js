const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.addEventListener("DOMContentLoaded", () => {
  const signupFrom = document.getElementById("form1");
  const signup = document.getElementById("signup-btn");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  signupFrom.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe el formulario automáticamente

    //Realizamos las Validaciones
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || email === "" || password === "" ) {
      // alert("Please enter a name");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the fields.",
      });
    }else{
      Swal.fire({
        icon: "success",
        title: "successfully",
      });
      return;
    }

    // Si todas las validaciones pasan, puedes enviar los datos al servidor aquí
    // Por ejemplo, utilizando fetch() o una biblioteca como axios

    // Clear form inputs after successful submission
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });
});

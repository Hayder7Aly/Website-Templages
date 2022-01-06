const toggle = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

function togglerFunction() {
  toggle.classList.toggle("fa-times");
  navigation.classList.toggle("active");
}

toggle.addEventListener("click", togglerFunction);

window.addEventListener("scroll", (e) => {
  toggle.classList.remove("fa-times");
  navigation.classList.remove("active");
});

// donation

const inputs = document.querySelectorAll("input");

function removeAllClasses() {
  inputs.forEach((input) => {
    input.classList.remove("active");
  });
}
inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    removeAllClasses();
    input.classList.add("active");
  });
});

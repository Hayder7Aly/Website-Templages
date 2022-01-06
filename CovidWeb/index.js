const header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const rocket = document.querySelector(".rocket");

rocket.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
toggle.addEventListener("click", (e) => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

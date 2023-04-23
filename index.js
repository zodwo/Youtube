const openbtn = document.querySelector(".openss");
const sidebar = document.querySelector(".sidebar");
const wrapper = document.querySelector(".sidebar-wrapper");

openbtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  wrapper.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target === wrapper) {
    wrapper.classList.toggle("active");
    sidebar.classList.toggle("active");
  }
});

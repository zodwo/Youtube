const openbtn = document.querySelector(".openss");
const sidebar = document.querySelector(".sidebar");

openbtn.addEventListener("click", function () {
    sidebar.classList.toggle("active")
});

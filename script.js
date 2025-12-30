const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

setTimeout(() => {
  page1.classList.remove("active");
  page2.classList.add("active");
}, 5000);

setTimeout(() => {
  page2.classList.remove("active");
  page3.classList.add("active");
}, 10000);

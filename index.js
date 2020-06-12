const documentElement = document.querySelector("html");
const contentElement = document.querySelector(".main-content");
const sidebarElement = document.querySelector(".sidebar");
const sidebarIsOpen = () =>
  documentElement.classList.contains("sidebar-is-open");

const openSidebar = () => {
  /* How you trigger the change is up to you */
  documentElement.classList.add("sidebar-is-open");
};

const closeSidebar = () => {
  documentElement.classList.remove("sidebar-is-open");
};

const toggleSidebar = () => {
  sidebarIsOpen() ? closeSidebar() : openSidebar();
};
console.log("your index.js file is loaded correctly!");

$("#bounce").click(function () {
  
  if ($(this).hasClass("blink")) {
    $(this).animate({ opacity: 0.1 }, "bounce");
    $(this).removeClass("blink");
  } else {
    $(this).animate({ opacity: 1 }, "bounce");
    $(this).addClass("blink");
  }
});

function toggleClass() {
  var element = document.getElementById("contact");
  element.classList.toggle("active");
}

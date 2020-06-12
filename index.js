const documentElement = document.querySelector("html");
const contentElement = document.querySelector(".main-content");
const sidebarElement = document.querySelector(".sidebar");
const sidebarIsOpen = () => documentElement.classList.contains("sidebar-is-open");

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

$("#bounce").click(function() {
    for (var i = 1; i <= 3; i++) {
        $(this).animate({ top: 30 }, "slow");
        $(this).animate({ top: 0 }, "slow");
    }
});

function toggleClass() {
    var element = document.getElementById("contact");
    element.classList.toggle("active");
}
const headerIteams = document.querySelector(".header-items");
const crossIteams = document.querySelector("li.mobile-cross");
const nav = document.querySelector("ul.nav");
const mobileItems = document.querySelector(".mobile-menu");
const header = document.querySelector("header");
mobileItems.onclick = function(){
    nav.classList.toggle("active");
};
crossIteams.onclick = function(){
    nav.classList.remove("active");
};
window.onscroll = function(){
    this.scrollY > 20 ?
    header.classList.add("active"):
    header.classList.remove("active");
    this.scrollY > 20 ?
    headerIteams.classList.add("actives"):
    headerIteams.classList.remove("actives");
};
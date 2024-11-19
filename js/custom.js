const sidebarSec = document.querySelector(".sidebarSec");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () =>{
    sidebarSec.classList.toggle("collapsed")
    footer.classList.toggle("collapsed")
    header.classList.toggle("collapsed")
});


sideBox = document.querySelector(".side-box").querySelectorAll("a")
// console.log(sideBox);

sideBox.forEach(element =>{
    element.addEventListener("click", function(){
        sideBox.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active")
    })
}); 
const sidebarSec = document.querySelector(".sidebarSec");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () =>{
    sidebarSec.classList.toggle("collapsed")
    footer.classList.toggle("collapsed")
    header.classList.toggle("collapsed")
});


// sideBox = document.querySelector(".side-box").querySelectorAll("a")
// console.log(sideBox);

// sideBox.forEach(element =>{
//     element.addEventListener("click", function(){
//         sideBox.forEach(nav=>nav.classList.remove("active"))
//         this.classList.add("active")
//     })
// }); 

$(document).ready( function () {
    $('#myTable').DataTable();
} );



const mainImg = document.getElementById("large-img");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick= function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick= function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick= function(){
    mainImg.src = smallImg[3].src;
}

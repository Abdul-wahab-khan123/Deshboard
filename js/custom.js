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
        location.reload();
        this.classList.add("active")
    })
}); 

// const links = document.querySelectorAll('a');

//     links.forEach(link => {
//       link.addEventListener('click', function (e) {
//         e.preventDefault(); // Prevent the default link action
//         localStorage.setItem('activeLink', this.id); // Save the clicked link ID
//         location.reload(); // Reload the page
//       });
//     });

$(document).ready( function () {
    $('#myTable').DataTable();
} );


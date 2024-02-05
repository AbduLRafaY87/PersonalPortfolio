let menuIcon = document.querySelector('#menu-icon');
let sidebar = document.querySelector(".all-links");
let customCursor = document.querySelector(".cursor");
let body = document.querySelector("body");

body.addEventListener("mousemove", function(dets){
    customCursor.style.left = dets.x+"px";
    customCursor.style.top = dets.y+"px";
})
menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x');
    sidebar.classList.toggle('open');
})

let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function(){
    const wScroll = window.scrollY;

    // Use the comparison operator === instead of =
    if(wScroll > 4){
        navbar.style.backdropFilter = 'blur(50px)';
        navbar.style.margin = '0px';
        navbar.style.padding = '20px 50px';
        navbar.style.backgroundColor = '#ffffff99';
        navbar.style.boxShadow = '0px 0px 5px #11111118';
        // navbar.style.border = '4px solid #f7f7f7';
    }
    else{
        navbar.style.backdropFilter = 'none';
        navbar.style.margin = '20px 50px';
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.border = 'none';

    }
});



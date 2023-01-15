//  BURGER MENU

const menuHamburger = document.getElementById("menu-hamburger")
const navLinks = document.getElementById("nav-links")
const body = document.body
        
menuHamburger.addEventListener('click',()=>{navLinks.classList.toggle('mobile-menu')})
menuHamburger.addEventListener('click',()=>{body.classList.toggle('scroll-block')})

function activate(activer) {
    document.getElementById("scroll1").classList.remove("active")
    document.getElementById("scroll2").classList.remove("active")
    document.getElementById("scroll3").classList.remove("active")
    document.getElementById("scroll4").classList.remove("active")
    document.getElementById("scroll5").classList.remove("active")
    document.getElementById(activer).classList.add("active")

    navLinks.classList.remove("mobile-menu")
    body.classList.remove("scroll-block")
}

// Paralax

let title = document.getElementById("title");

window.addEventListener("scroll", function(){
    var value = this.window.scrollY;

    if(value < 700 / 5){
        title.style.translate = "-" + value * 2.7 + "px";
    }
    else{
        title.style.marginLeft = 0 + "px";
    }
    
})
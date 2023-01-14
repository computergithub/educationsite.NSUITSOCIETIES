    
window.addEventListener('scroll',() => { 
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY >20)
})

const fqas = document.querySelectorAll('.fqa');

fqas.forEach(fqa => {
    fqa.addEventListener('click',()=> {
        fqa.classList.toggle('open');
        const icon= fqa.querySelector('.fqa-icon i');
        if(icon.className==='uil uil-plus') {
            icon.className= "uil uil-minus";     
        } else {
            icon. className="uil uil-plus";
        }
    })

})

let menu =document.querySelector(".nav-menu");
let menuBtn =document.querySelector("#open-menu-btn");
let clossBtn =document.querySelector("#closs-menu-btn");
 

menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex";
    clossBtn.style.display="inline-block";
    menuBtn.style.display = "none";

})
 let clossNav=() => {
    menu.style.display = "none";
    clossBtn.style.display="none";
    menuBtn.style.display = "inline-block";
     
 }
 clossBtn.addEventListener('click',clossNav)
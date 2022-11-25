let nav1 = document.querySelectorAll('#t1')
let nav2 = document.querySelectorAll('#t2')
let social = document.querySelectorAll('#t3')
let menu = document.querySelector('#mobileMenu')
let burger = document.querySelector('#material-symbols-outlined')
let closeMenu = document.querySelector('#closeMenu')

nav1.forEach(function(content){
   
    content.addEventListener("mouseover", function() {
       content.classList.add("teste")
    })
    
    content.addEventListener("mouseout", function() {
        content.classList.remove("teste")
    })
    console.log(content)
})

nav2.forEach(function(elemento){
   
    elemento.addEventListener("mouseover", function() {
       elemento.classList.add("nav2")
    })
    
    elemento.addEventListener("mouseout", function() {
        elemento.classList.remove("nav2")
    })
})


social.forEach(function(elemento){
   
    elemento.addEventListener("mouseover", function() {
       elemento.classList.add("social2")
    })
    
    elemento.addEventListener("mouseout", function() {
        elemento.classList.remove("social2")
    })
})

burger.onclick = function() {
    menu.style.display = 'block'

}

closeMenu.onclick = function() {
    menu.style.display = 'none'

}
let nav1 = document.querySelectorAll('#t1')
let nav2 = document.querySelectorAll('#t2')
let social = document.querySelectorAll('#t3')


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


/*social.forEach(function(very){
   
    very.addEventListener("click", function() {
        alert("oi")
       very.classList.add("social2")
    })
    
    very.addEventListener("mouseout", function() {
        very.classList.remove("social2")
    })
})*/


let houver = document.querySelectorAll('a')

houver.forEach(function(elemento){
   

    elemento.addEventListener("mouseover", function() {
       elemento.classList.add("teste")
    })
    
    elemento.addEventListener("mouseout", function() {
        elemento.classList.remove("teste")
    })
})


let nome = document.getElementById("nome-livro")

let autor = document.getElementById("autor")

let paginas = document.getElementById("n-paginas")

let pais = document.getElementById("pais")


let gerador = document.getElementById("gerar")
let divl = document.getElementById("livro")

gerador.addEventListener("click", 
function (){
    divl.innerHTML=''
    divl.innerHTML += `<h2>${nome.value}</h2>`
    divl.innerHTML += `<h3>${autor.value}</h3>`
    divl.innerHTML += `<p>${paginas.value}</p>`
    divl.innerHTML += `<p>${pais.value}</p>`

})

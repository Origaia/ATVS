const div = document.getElementById("div-g")

const imagem = document.getElementById("img")

const name = document.getElementById("name")

const prof = document.getElementById("profissao")

let src_img= [
    './1.jpg',
    './2.jpg',
    './3.jpg',
    './4.jpg',
    './5.jpg',
    './6.jpg',
    './7.jpg',
    './8.jpg',
    './9.jpg',
    './10.jpg'
]


let name_al = [
    'Maria ',
    'Alice ',
    'Mariana ',
    'Leticia ',
    'Marcela ',
    'Mario ',
    'Jose ',
    'Gabriel ',
    'Felipe ',
    'Gustavo '
]


let sobrenome_al = [
    'Silva',
    'Santos',
    'Pereira',
    'Oliveira',
    'Costa',
    'Rodrigues',
    'Ferreira',
    'Almeida',
    'Carvalho',
    'Gonçalves'
]


let prof_al = [
    'Médico',
    'Professor',
    'Engenheiro',
    'Advogado',
    'Designer gráfico',
    'Chef de cozinha',
    'Jornalista',
    'Eletricista',
    'Ator/atriz',
    'Bombeiro'
]


const butt = document.getElementById("gerador")

butt.addEventListener("click", 
function (){

    let nm = parseInt(Math.random()*9)
    let sbr = parseInt(Math.random()*9)
    let prf = parseInt(Math.random()*9)
    let src
    if(nm<6){
        src=parseInt(Math.random()*4)
    }
    else if(nm>5){
        src=parseInt(Math.random()*3+6)
    }

    imagem.src=`${src_img[src]}`

    name.innerHTML=''
    name.innerHTML=`${name_al[nm]} ${sobrenome_al[sbr]}`
    prof.innerHTML=`${prof_al[prf]}`


})



function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


function mudouTamanho(){
    if(window.innerWidth >=568){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}


function clickMais(){
    if(mais.style.dysplay == 'block'){
        mais.style.display = 'none'
    } else {
        mais.style.display = 'block'
    }
}
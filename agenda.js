var items = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var dia = document.querySelector('input[name = agenda_cadastro]');
    var horario = document.querySelector('input[name = horario]');

    items.push({
        agenda: dia.value,
        horarioDia: horario.value
       
    })


    let agendaDia = document.querySelector('.tbody');
    let soma = 0;

agendaDia.innerHTML="";
items.map(function(val){
    soma+=parseFloat(val.horarioDia);
    agendaDia.innerHTML +=`

    <td>`+val.agenda+`</td>
    <td>`+val.horarioDia+`</td>
    
    
    
    `



    soma = soma.toFixed(4);
    dia.value =  "";
    horario.value ="";
    
    


  
});

});


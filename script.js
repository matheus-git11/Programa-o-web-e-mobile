var conv = parseInt(document.getElementById('taxaConversao').value) ;
var real = parseInt(document.getElementById('taxaReal').value);
var dolar ;

const buttonR = document.querySelector('.botaoR');
const buttonD = document.querySelector('.botaoD');
const buttonC = document.querySelector('#botaoC');
const buttonL = document.querySelector('#botaoL');


function clicConvert(){
    if(document.getElementById('taxaConversao').value===""){
        alert('preencha os campos');
    }else{
    buttonR.disabled = false;
    buttonD.disabled=false;
    buttonC.disabled=true;  
    
    var conv = parseInt(document.getElementById('taxaConversao').value) ;
    console.log(conv);
    }
   
}

function clicClean(){
    buttonC.disabled=false;  
    buttonR.disabled = true;
    buttonD.disabled= true;
   
    const element = document.querySelector('#resultado');
    const div = document.querySelector('#result');   
    div.style.display='none';
    element.innerHTML = ''; 

 
    const element2 = document.querySelector('#resultadoD');
    const div2 = document.querySelector('#resultD');
    div2.style.display='none';
    element2.innerHTML =''; 

    
     document.getElementById('taxaReal').value='';
     document.getElementById('TaxaDolar').value='';
     document.getElementById('taxaConversao').value='';
   


}

function clicReal(){
   if(document.getElementById('taxaReal').value===""){
       alert('preencha os campos');

   }else{
    var real = parseInt(document.getElementById('taxaReal').value);
    var conv = parseInt(document.getElementById('taxaConversao').value) ;
    
    var result = (real/conv).toFixed(2);
    const element = document.querySelector('#resultado');
    const div = document.querySelector('#result');
    
    div.style.display='block';
    element.innerHTML = result; 
   }

    
}

function clicDolar(){
  if(document.getElementById('TaxaDolar').value===""){
    alert('preencha os campos');

  }else{
    var real = parseInt(document.getElementById('TaxaDolar').value);
    var conv = parseInt(document.getElementById('taxaConversao').value) ;
    var result = (real*conv).toFixed(2);

    const element = document.querySelector('#resultadoD');
    const div = document.querySelector('#resultD');

    div.style.display='block';
    element.innerHTML = result; 
  }

    

}

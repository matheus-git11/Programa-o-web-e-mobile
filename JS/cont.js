 function criarDiv (){
    
    if(document.querySelector('#texto').value===""){
        alert("Insira um nome para seu contador");

    }else{
        const rotulo = document.querySelector('#texto').value;
        const elem = document.createElement('div');
        const phar = document.createElement('p');
        const button = document.createElement('button');
        
       
        
        button.innerHTML="Limpar";
        phar.innerHTML= rotulo;
        elem.classList.add('contador');
   
        document.querySelector('.field').appendChild(elem);
        elem.appendChild(phar);
        elem.appendChild(button);

    }
     
  
    
 }


 function contador(){

 }


 function limpar(){

 }
 function criarDiv (){
     const elem = document.createElement('div');
     const phar = document.createElement('p');
     const button = document.createElement('button');
    
     
     button.innerHTML="Limpar";
     phar.innerHTML="Seu rotulo aqui";
     elem.classList.add('contador');

     document.querySelector('.field').appendChild(elem)
     elem.appendChild(phar);
     elem.appendChild(button);
 }
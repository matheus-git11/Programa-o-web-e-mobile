 let id = 0;
 let n;
 

 function criarDiv (){
    
    if(document.querySelector('#texto').value===""){
        alert("Insira um nome para seu contador");

    }else{
        const rotulo = document.querySelector('#texto').value;
        const elem = document.createElement('div');
        const phar = document.createElement('p');
        const phar2 = document.createElement('p');
        const button = document.createElement('button');
         
        button.innerHTML="Limpar";
        phar2.innerHTML=0;
        phar.innerHTML= rotulo;
        elem.classList.add('contador');

        let n = id;
        elem.id=id;
        elem.onclick = function(){contador(n)};
        button.onclick = function(){limpar(n)}
        
        id++;
        phar2.id=id;
        id++;
        
       

        elem.appendChild(phar);
        elem.appendChild(phar2);
        elem.appendChild(button);

        
        document.querySelector('.field').appendChild(elem);

    }
   
  
    
 }


 function contador(id){
      var i = id+1;
      document.getElementById(i).innerHTML++;
     
     console.log(n);
  

 }


 function limpar(id){
    var i = id+1;
    document.getElementById(i).innerHTML= -1;
 }
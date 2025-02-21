function Comprobar() {
    let nota= ParseFloat(document.getElementById("nota").value;
      let resultado= document.getElementById("resultado");
    if(nota < 0 || nota < 10){
    resultado.innerText = "El número que has puesto no es válido";
   }
     else if (nota < 5) {
      resultado.innerText = "Suspenso";
     }
     else{
   resultado.innerText = "Aprobado";
     }

     }

function Comprobar() {
    let nota= ParseFloat(document.getElementById("nota").value;
      let resultado= ParseFloat(document.getElementById("resultado");
    if(nota < 0 || nota < 10){
    resultado.innerText = "El número que has puesto no es válido";
   }
     else if (nota < 5) {
      resultado.innerText = "Suspenso";
     }
     if(nota < 9){
   resultado.innerText = "Aprobado";
     }

     }

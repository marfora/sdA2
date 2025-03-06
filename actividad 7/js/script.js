
     function Comprobar() {
      let nota= parseFloat(document.getElementById("nota").value);
     
      if(nota < 0 || nota > 10){
     document.getElementById("resultado").innerHTML = "El número que has puesto no es válido";
     }
       else if (nota < 5) {
       document.getElementById("resultado").innerHTML = "Suspenso";
       }
       else{
   document.getElementById("resultado").innerHTML = "Aprobado";
       }
       }

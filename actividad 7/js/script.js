function Comprobar() {
    let calificar= Parse
    if(temp > 15 && temp < 30){
    document.getElementById("parrafo1").innerHTML = "Hace Bueno";
     document.getElementById("parrafo1").style.color = "green";
     }
     else{
      document.getElementById("parrafo1").innerHTML = "Hace mal dia";
     document.getElementById("parrafo1").style.color = "red";
     }
     if(temp < -40 || temp > 50){
    document.getElementById("parrafo2").innerHTML = "voy a morir";
     document.getElementById("parrafo2").style.color = "red";
     }
     else{
      document.getElementById("parrafo2").innerHTML = "sobrevivire";
     document.getElementById("parrafo2").style.color = "green";
     }
       if(!(temp >0)){
    document.getElementById("parrafo3").innerHTML = "congelada";
     document.getElementById("parrafo3").style.color = "red";
     }
     else{
      document.getElementById("parrafo3").innerHTML = "liquita o gasioso";
     document.getElementById("parrafo3").style.color = "green";
     }
     }
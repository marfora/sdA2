function MensajeSwitch() {  
let hora = parseInt(prompt("Ingrese la hora (0-24):")); 
if (hora < 0 || hora > 24) {  
    alert("Error: La hora debe estar entre 0 y 24."); 
return;  }  
switch (true) {    
case (hora >= 7 && hora <= 11):      
alert("Buenos días!");      
break;    
case (hora >= 12 && hora <= 21):      
alert("Buenas tardes!");      
break;    
default:      
alert("Buenas noches!");  }}
    
function MensajeIf() {  
let hora = parseInt(prompt("Ingrese la hora (0-24):"));  
if (hora < 0 || hora > 24) {    
alert("Error: La hora debe estar entre 0 y 24.");    
return;  }  
if (hora >= 7 && hora <= 11) {    
alert("Buenos días!");  } 
else if (hora >= 12 && hora <= 21) {    
alert("Buenas tardes!");  } 
else {    alert("Buenas noches!");  }}

function MensajeSwitch() {  
    let hora = parseInt(document.getElementById("hora").value, 10); 
    
    switch (hora){    
    case 7 :   
    case 8 : 
    case 9 : 
    case 10 : 
    case 11 : 
    case 12 : 
        document.getElementById("resultado").innerHTML = "Buenos dias";      
    break;
    
    case 13 :   
    case 14 : 
    case 15 : 
    case 16 : 
    case 17 : 
    case 18 :
    case 19 :
    case 20 :
    case 21 : 
        document.getElementById("resultado").innerHTML = "Buenas tardes";
    break;
    
    case 22 :
    case 23 :
    case 24 :
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 :
        document.getElementById("resultado").innerHTML = "Buenas noches";
    break;

    default:
        document.getElementById("resultado").innerHTML = "Esto no es una hora";
    }}
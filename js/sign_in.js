function identificador() {
var correo = document.getElementById("id_Input_Mail").value;
var contra = document.getElementById("id_Input_Password").value;
var login= [correo,contra]
var guardado = [correo,"Pepito"];

var bandera_correo=false;
var bandera_contra=false;
    for (let index = 0; index < guardado.length; index++) {
        if (guardado[index]==login[index]) {
            bandera_contra=true;
            bandera_correo=true;
            
        }else{
            bandera_contra=false;
            bandera_correo=false;
        }
    }

        if (bandera_contra&&bandera_correo==true) {
            console.log("Bienvenido")
            
        }  
        else
        {
            console.log("ERROR")
        }
        
    


    
}

        
        
    
   
       
    

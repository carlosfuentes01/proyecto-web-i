var contador=0;
var contador2=2;
var contador3=0;
var contador4=0;
var mail;
var password;
var registrou=[mail,password]
function registro() {
     mail = document.getElementById("id_Input_Email").value;
     password = document.getElementById("id_Input_Password").value;
    if (contador==0&&contador2==2) {
        registrou[contador]=mail;
registrou[contador2]=password;
    }

   
    
    if (document.getElementById("id_Registr")==onclick) {
        contador++
        contador2++
        contador3=contador+1;
        contador4=contador2+1;

    }
    if (contador>1) {
        registrou[contador3]=mail;
registrou[contador4]=password;
        
    }
    console.log(contador)
  for (let index = 0; index < registrou.length; index++) {
    console.log(registrou)
    
  }
}
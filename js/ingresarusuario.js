
function identificar_usuario() {
    var correo = document.getElementById("id_Input_Mail");
     var password = document.getElementById("id_Input_Password").value;
           if (correo==""|| password=="") {
            alert("llene los campos vacios")
            correo.focus();
           } else {
            let entro=false
            let administrador;
                var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
                for (let i = 0; i < lista_usuarios.length; i++) {
                    if (lista_usuarios[i].email == correo.value) {
                     if (lista_usuarios[i].password==password) {
                       
                            entro=true
                            administrador=lista_usuarios[i].admin
                            console.log(administrador+" es administrador")
                            console.log(lista_usuarios[i].email+"cuenta admin")
                             break; 
                        }
                        
                     }
            
                }
                
                if (entro==false) {
                    alert("cuenta o contraseña incorrecta")
                }else{
                    if (administrador=="true") {
                        window.location.href="../html/menuadministrador.html"
                    }else{
                        window.location.href="../html/paginaconsejos.html"
                    }
                    
                }
                
           } 
        
    
    
        
    }


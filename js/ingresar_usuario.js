function identificar_usuario() {
    
    var correo = document.getElementById("id_Input_Mail");
     var password = document.getElementById("id_Input_Password").value;
           if (correo==""|| password=="") {
            alert("Llene los campos vacios")
            correo.focus();
           } else {
            let entro=false
            let administrador;
                var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
                console.log(lista_usuarios)
                for (let i = 0; i < lista_usuarios.length; i++) {
                    if (lista_usuarios[i].email == correo.value) {
                     if (lista_usuarios[i].password==password) {
                       
                            entro=true
                            administrador=lista_usuarios[i].admin
                            console.log(lista_usuarios[i])
                            localStorage.setItem("num_cuenta_actual",JSON.stringify(lista_usuarios[i]))
                      
                            
                            
                            
                             break; 
                        }
                        
                     }
                     
                }
                
                if (entro==false) {
                    alert("Cuenta o contraseña incorrecta")
                }else{
                    if (administrador=="true") {
                        window.location.href="../html/menuadministrador.html"
                    }else{
                        window.location.href="../html/paginaconsejos.html"
                    }
                    
                }
                
           } 
        
    
                            
        
        
    }
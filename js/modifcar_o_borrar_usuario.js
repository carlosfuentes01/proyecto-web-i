
var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
window.onload=function () {
    read_usuario()
    alerta()
}
function alerta() {
    var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
    var alerta_cuenta=false
    var diferente=false
    if (lista_alertas==0) {
        
    }else{
        for (let index = 0; index < lista_alertas.length; index++) {
            if (usuario.email==lista_alertas[index].email) {
                alerta_cuenta=true
                break;
            }
            
        }
        if (alerta_cuenta) {
            var fechas_actual = Date.now();
    var delta_fechas = new Date(fechas_actual)
    for (let index = 0; index < lista_alertas.length; index++) {
        if (usuario.email==lista_alertas[index].email) {
            var fecha_transaccion = new Date(lista_alertas[index].fecha_hora_alerta)
            var milisegundos=0*1;

        
                switch (lista_alertas[index].opcion_repeticion) {
                        case "Diaria":
                            if (fecha_transaccion.getMinutes()==delta_fechas.getMinutes()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getMinutes()-delta_fechas.getMinutes())>0){
                                    milisegundos=(fecha_transaccion.getMinutes()-delta_fechas.getMinutes())*60000
                                }else{
                                    milisegundos=(delta_fechas.getMinutes()-fecha_transaccion.getMinutes())*60000
                                }
                                
                            }
                            if (fecha_transaccion.getHours()==delta_fechas.getHours()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getHours()-delta_fechas.getHours())>0){
                                    milisegundos=((fecha_transaccion.getHours()-delta_fechas.getHours())*3600000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getHours()-fecha_transaccion.getHours())*3600000)+parseInt(milisegundos,10)
                                }
                            }
                            let alarmas_;
                            alarmas_=setTimeout(alarma_sonar, milisegundos);
                            
                        
                        break;
                        case "Semanalmente":
                            if (fecha_transaccion.getMinutes()==delta_fechas.getMinutes()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getMinutes()-delta_fechas.getMinutes())>0){
                                    milisegundos=(fecha_transaccion.getMinutes()-delta_fechas.getMinutes())*60000
                                }else{
                                    milisegundos=(delta_fechas.getMinutes()-fecha_transaccion.getMinutes())*60000
                                }
                                
                            }
                            if (fecha_transaccion.getHours()==delta_fechas.getHours()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getHours()-delta_fechas.getHours())>0){
                                    milisegundos=((fecha_transaccion.getHours()-delta_fechas.getHours())*3600000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getHours()-fecha_transaccion.getHours())*3600000)+parseInt(milisegundos,10)
                                }
                            }
                            if (fecha_transaccion.getDay()==delta_fechas.getDay()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getDay()-delta_fechas.getDay())>0){
                                    milisegundos=((fecha_transaccion.getDay()-delta_fechas.getDay())*86400000000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getDay()-fecha_transaccion.getDay())*86400000000)+parseInt(milisegundos,10)
                                }
                            }
                            let alarmas1=setTimeout(alarma_sonar, milisegundos);
                        break;
                        case "Mensualmente":
                            if (fecha_transaccion.getMinutes()==delta_fechas.getMinutes()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getMinutes()-delta_fechas.getMinutes())>0){
                                    milisegundos=(fecha_transaccion.getMinutes()-delta_fechas.getMinutes())*60000
                                }else{
                                    milisegundos=(delta_fechas.getMinutes()-fecha_transaccion.getMinutes())*60000
                                }
                                
                            }
                            if (fecha_transaccion.getHours()==delta_fechas.getHours()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getHours()-delta_fechas.getHours())>0){
                                    milisegundos=((fecha_transaccion.getHours()-delta_fechas.getHours())*3600000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getHours()-fecha_transaccion.getHours())*3600000)+parseInt(milisegundos,10)
                                }
                            }
                            if (fecha_transaccion.getDate()==delta_fechas.getDate()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getDate()-delta_fechas.getDate())>0){
                                    milisegundos=((fecha_transaccion.getDate()-delta_fechas.getDate())*86400000000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getDate()-fecha_transaccion.getDate())*86400000000)+parseInt(milisegundos,10)
                                }
                            }
                            let alarmas2=setTimeout(alarma_sonar, milisegundos);
                        break;
                        case "Anualmente":
                            if (fecha_transaccion.getMinutes()==delta_fechas.getMinutes()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getMinutes()-delta_fechas.getMinutes())>0){
                                    milisegundos=(fecha_transaccion.getMinutes()-delta_fechas.getMinutes())*60000
                                }else{
                                    milisegundos=(delta_fechas.getMinutes()-fecha_transaccion.getMinutes())*60000
                                }
                                
                            }
                            if (fecha_transaccion.getHours()==delta_fechas.getHours()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getHours()-delta_fechas.getHours())>0){
                                    milisegundos=((fecha_transaccion.getHours()-delta_fechas.getHours())*3600000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getHours()-fecha_transaccion.getHours())*3600000)+parseInt(milisegundos,10)
                                }
                            }
                            if (fecha_transaccion.getDate()==delta_fechas.getDate()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getDate()-delta_fechas.getDate())>0){
                                    milisegundos=((fecha_transaccion.getDate()-delta_fechas.getDate())*86400000000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getDate()-fecha_transaccion.getDate())*86400000000)+parseInt(milisegundos,10)
                                }
                            }
                            if (fecha_transaccion.getMonth()==delta_fechas.getMonth()
                            ) {
                               
                            }else{
                                if((fecha_transaccion.getMonth()-delta_fechas.getMonth())>0){
                                    milisegundos=((fecha_transaccion.getMonth()-delta_fechas.getMonth())*2629800000000)+parseInt(milisegundos,10)
                                }else{
                                    milisegundos=((delta_fechas.getMonth()-fecha_transaccion.getMonth())*2629800000000)+parseInt(milisegundos,10)
                                }
                            }
                            let alarmas3=setTimeout(alarma_sonar, milisegundos);
                        break;
                    
                
                    default:
                        break;
                }
            
        }
        
    }
    
        }
    }
}
function alarma_sonar() {
    var fechas_actual = Date.now();
    var delta_fechas = new Date(fechas_actual)
    var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
    for (let index = 0; index < lista_alertas.length; index++) {
        var fecha_transaccion = new Date(lista_alertas[index].fecha_hora_alerta) 
        if (usuario.email==lista_alertas[index].email) {
            if (delta_fechas.getDate()==fecha_transaccion.getDate()&&
            delta_fechas.getMonth()==fecha_transaccion.getMonth()&&
            delta_fechas.getMinutes()==fecha_transaccion.getMinutes()&&
            delta_fechas.getFullYear()==fecha_transaccion.getFullYear()&&
            delta_fechas.getHours()==fecha_transaccion.getHours()) {
                
                        alert("la alarma con tipo "+lista_alertas[index].tipo_alerta
                            +" y descripción "+lista_alertas[index].descripcion_alerta
                            +" esta sonando"
                        ) 
                    
                
                
            }
        }
        
    }
    
}
function read_usuario() {
    var id_Input_Name=document.getElementById("id_Input_Name")
    var id_Input_Apellido=document.getElementById("id_Input_Apellido")
    var id_Input_NºDocumento=document.getElementById("id_Input_NºDocumento")
    var id_Input_Password=document.getElementById("id_Input_Password")
    var id_Input_Email=document.getElementById("id_Input_Email")
    var id_tipo_Input_Documento=document.getElementById("id_tipo_Input_Documento")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
var indice;
    for (let index = 0; index < lista_usuarios.length; index++) {
        if (usuario.email==lista_usuarios[index].email) {
            indice=index
        }
        
    }
    id_Input_Name.value=lista_usuarios[indice].nombre
    id_Input_Email.value=lista_usuarios[indice].email
    id_Input_Apellido.value=lista_usuarios[indice].apellido
    id_Input_NºDocumento.value=lista_usuarios[indice].numero_documento

    id_Input_Password.value=lista_usuarios[indice].password
    id_tipo_Input_Documento.value=lista_usuarios[indice].tipo_documento
    
    
}
function abrir_modal_actualizar() {
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.showModal(); 
    var id_Input_Name=document.getElementById("id_Input_Name-modal_actualizar")
    var id_Input_Apellido=document.getElementById("id_Input_Apellido-modal_actualizar")
    var id_Input_NºDocumento=document.getElementById("id_Input_NºDocumento-modal_actualizar")
    var id_Input_Password=document.getElementById("id_Input_Password-modal_actualizar")

    var id_tipo_Input_Documento=document.getElementById("id_tipo_Input_Documento-modal_actualizar")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
var indice;
    for (let index = 0; index < lista_usuarios.length; index++) {
        if (usuario.email==lista_usuarios[index].email) {
            indice=index
        }
        
    }
    id_Input_Name.value=lista_usuarios[indice].nombre

    id_Input_Apellido.value=lista_usuarios[indice].apellido
    id_Input_NºDocumento.value=lista_usuarios[indice].numero_documento

    id_Input_Password.value=lista_usuarios[indice].password
    id_tipo_Input_Documento.value=lista_usuarios[indice].tipo_documento
}
function actualizar() {
    var id_Input_Name=document.getElementById("id_Input_Name-modal_actualizar")
    var id_Input_Apellido=document.getElementById("id_Input_Apellido-modal_actualizar")
    var id_Input_NºDocumento=document.getElementById("id_Input_NºDocumento-modal_actualizar")
    var id_Input_Password=document.getElementById("id_Input_Password-modal_actualizar")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
    var indice;
    for (let index = 0; index < lista_usuarios.length; index++) {
        if (usuario.email==lista_usuarios[index].email) {
            indice=index
        }
        
    }
    lista_usuarios[indice].nombre=id_Input_Name.value
    lista_usuarios[indice].apellido=id_Input_Apellido.value
    lista_usuarios[indice].numero_documento=id_Input_NºDocumento.value
    lista_usuarios[indice].password=id_Input_Password.value
    lista_usuarios[indice].tipo_documento=id_tipo_Input_Documento.value
    localStorage.setItem("json_usuario",JSON.stringify(lista_usuarios))
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close(); 
    window.location.href="modificar_o_borrar_usuario.html"
}
function borrar() {
    console.log("hola")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
     for (let index = 0; index < lista_usuarios.length; index++) {
        if (lista_usuarios[index].email==usuario.email) {
            lista_usuarios.splice(index,1)
            break;
        }
        
     }
     localStorage.setItem("json_usuario",JSON.stringify(lista_usuarios))
     alert("Gracias por haber usado Cetus")
     window.location.href="../index.html"
}
function cerrar_borrar() {
    var modal_borrar=document.getElementById("modal_borrar")
    modal_borrar.close(); 
}
function cerrar_actualizar() {
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close(); 
}
function abrir_modal_borrar() {
    var modal_borrar=document.getElementById("modal_borrar")
    modal_borrar.showModal(); 
}
function ir_principal() {
    window.location.href="paginaconsejos.html"
}
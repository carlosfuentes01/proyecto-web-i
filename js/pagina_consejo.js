var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
window.onload=function () {
    colocar_nombre()
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
function colocar_nombre() {
    
    document.querySelector("#nombre_usuario_inside_div_superior_derecha_inside_div_superior").innerHTML=usuario.nombre+" "+usuario.apellido
}

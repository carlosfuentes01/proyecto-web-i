var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")

window.onload=function () {
    colocar_nombre()
    colocar_transacciones()
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
function colocar_transacciones(){
    
    
    var fechas_actual = Date.now();
    var delta_fechas = new Date(fechas_actual)
    for (let index = 0; index < 7; index++) {
        
       
            
            
            if (index==0) {
                var div_div__nombre=document.getElementById("Hoy")
                
                
            }else{
                if (index==1) {
                    var div_div__nombre=document.getElementById("Ayer")
                    
                    
                }else{
                    var div_div__nombre=document.getElementById(index)
                    div_div__nombre.appendChild(document.createTextNode(mostrar_dia(delta_fechas.getDay())))
                    
                }
                
            }
            var div_div_transacciones=document.createElement("div")
            div_div_transacciones.setAttribute("class","div_div_transacciones")
            elegir_transacciones(div_div__nombre.getAttribute("id"),delta_fechas)
            delta_fechas.setDate(delta_fechas.getDate()-1)

            
    }

   

    
  
}

function elegir_transacciones(id,delta_fechas) {
    console.log("===============")
    var div_div__nombre=document.getElementById(id)
    console.log(div_div__nombre)
    var tiene_transacciones=false
    var div_div_transacciones=document.createElement("div")
    div_div_transacciones.setAttribute("class","div_div_transacciones")
    if (lista_transacciones.length==0) {
        
    }else{
        for (let index = 0; index < lista_transacciones.length; index++) {
            if (usuario.email==lista_transacciones[index].email) {
                tiene_transacciones=true;
                break;
            }
    }
    if (tiene_transacciones) {
        
        for (let index = 0; index < lista_transacciones.length; index++) {
            
            if (usuario.email==lista_transacciones[index].email) {
                console.log()
                var fecha_transacciones=new Date(lista_transacciones[index].fecha_transaccion)
                //console.log(fecha_transacciones.getMonth()+"mes transaccion"+delta_fechas.getMonth()+"mes actual")
                console.log(fecha_transacciones.getDate()+"dia transaccion"+delta_fechas.getDate()+"dia actual")

                if (fecha_transacciones.getFullYear()==delta_fechas.getFullYear()&&
                fecha_transacciones.getMonth()==delta_fechas.getMonth()&&
                fecha_transacciones.getDate()==delta_fechas.getDate()) {
                    console.log("hola")
                    var fecha=lista_transacciones[index].fecha_transaccion
                    var div_1=document.createElement("div")
                    div_1.appendChild(document.createTextNode(fecha))
                    
                    var di_=document.createElement("div")
                    di_.appendChild(document.createTextNode(lista_transacciones[index].tipo_ingreso_egreso))
                    di_.appendChild(document.createTextNode(mostrar_categoria(lista_transacciones[index].tipo_ingreso_egreso)))

                    var div_2=document.createElement("div")
                    div_2.appendChild(document.createTextNode(lista_transacciones[index].valor_transaccion))
                    div_div_transacciones.appendChild(div_1)
                    div_div_transacciones.appendChild(di_)
                    div_div_transacciones.appendChild(div_2)
                }
            }
            
        }
    }else{
        var div_contenedor_general=document.getElementById("div_contenedor_general")
        div_contenedor_general.appendChild(document.createTextNode("No hay transacciones"))
    }
}
div_div__nombre.appendChild(div_div_transacciones)
}
function mostrar_categoria(nombre) {
    var categoria;
    var tipos=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
    
    for (let index = 0; index < tipos.length; index++) {
       if (nombre==tipos[index].nombre_tipo) {
        categoria=tipos[index].categoria
       }
        
    }
    return categoria
}

function mostrar_dia(dia) {
    switch (dia) {
        case 0:
            Domingo = "Domingo"
            dia = Domingo
            break;

        case 1:
            Lunes = "Lunes"
            dia = Lunes
            break;

        case 2:
            Martes = "Martes"
            dia = Martes
            break;
        case 3:
            Miercoles = "Miercoles"
            dia = Miercoles
            break;
        case 4:
            Jueves = "Jueves"
            dia = Jueves
            break;

        case 5:
            Viernes = "Viernes"
            dia = Viernes
            break;

        case 6:
            Sabado = "Sabado"
            dia = Sabado
            break;


        default:
            break;
    }
    return dia
}
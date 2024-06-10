var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
var tipos=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
//se colocan aqui lista cuentas y tipos ya que al no cambiarse, seria mas eficiente tenerlos por aca
// y si se cambian, por  el mero hecho de que tras cada cambio se reinicie la pagina, hace que siempre
// este actualizado
var es_ingreso;
var cuenta_existente;
var cuenta_almacenada=false;
var indice_actualizar;
window.onload=function () {
    colocar_nombre()
    read_transacciones()
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
function read_transacciones() {
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var transacciones_del_usuario=[];
    for (let index = 0; index < lista_transacciones.length; index++) {
        if (lista_transacciones[index].email==usuario.email) {
            transacciones_del_usuario.push(lista_transacciones[index])
        }
        
    }
    if (transacciones_del_usuario.length==0) {
        var vacio=document.createElement("div")
        var div_contenedor_general_cuentas_bancarias=document.getElementById("div_contenedor_general_gestion_transacciones")
        vacio.appendChild(document.createTextNode("No hay transacciones registradas"))
        div_contenedor_general_cuentas_bancarias.appendChild(vacio)
        
    }else{
        var tabla=document.getElementById("tabla_gestion_transacciones")
        var tamano=transacciones_del_usuario.length
     if (tamano>3) {
            tamano=3
       }
        for (let index = 0; index < tamano; index++) {
            
            var fila=tabla.insertRow(-1)
            var columna=fila.insertCell(0)
            var columna1=fila.insertCell(1)
            columna1.appendChild(document.createTextNode(transacciones_del_usuario[index].fecha_transaccion))

            var columna2=fila.insertCell(2)
            columna2.appendChild(document.createTextNode(transacciones_del_usuario[index].tipo_transaccion))
            
            var columna3=fila.insertCell(3)
            columna3.appendChild(document.createTextNode(transacciones_del_usuario[index].descripcion))
            
            var columna4=fila.insertCell(4)
            columna4.appendChild(document.createTextNode(transacciones_del_usuario[index].valor_transaccion))

            var columna5=fila.insertCell(5)
            columna5.appendChild(document.createTextNode(transacciones_del_usuario[index].cuenta_bancaria_relacionada))

            
            var columna6=fila.insertCell(6)
            var botoneditar=document.createElement("button")
            botoneditar.appendChild(document.createTextNode("editar"))
            botoneditar.setAttribute("class","boton_editar_tabla") 
            botoneditar.setAttribute("id",index+"a")
            botoneditar.setAttribute("onclick","actualizar(getAttribute('id'))")
            var botonborrar=document.createElement("button")
            botonborrar.appendChild(document.createTextNode("borrar"))
            botonborrar.setAttribute("id",index)
            botonborrar.setAttribute("onclick","borrar_transaccion(getAttribute('id'))")
            botonborrar.setAttribute("class","boton_borrar_tabla")  
            columna6.appendChild(botoneditar)
            columna6.appendChild(botonborrar)

        }   
    }
}
function colocar_option_actualizar_egreso(i) {
    
    var input_numero_cuenta_actualizar_egreso=document.getElementById("input_numero_cuenta_actualizar_egreso")
    var nombre_tipo_actualizar_egreso=document.getElementById("nombre_tipo_actualizar_egreso")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    if (lista_cuentas_bancarias.length==0) {
        
    }else{
        
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                
            var option_numero=document.createElement("option")
            option_numero.setAttribute("value",lista_cuentas_bancarias[index].numero_de_cuenta)
            option_numero.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
            input_numero_cuenta_actualizar_egreso.appendChild(option_numero)
            if (lista_transacciones[i].cuenta_bancaria_relacionada==lista_cuentas_bancarias[index].numero_de_cuenta) {
                input_numero_cuenta_actualizar_egreso.value=lista_transacciones[i].cuenta_bancaria_relacionada
            }
            }
        }
       
    }
    if (tipos.length==0) {
        
    }else{
        
        
        for (let index = 0; index < tipos.length; index++) {
            if (tipos[index].tipo=="egreso") {
                var option_numero=document.createElement("option")
            option_numero.setAttribute("value",tipos[index].nombre_tipo)
            option_numero.appendChild(document.createTextNode(tipos[index].nombre_tipo))
            nombre_tipo_actualizar_egreso.appendChild(option_numero)
            }
            
            
     }
    }
}
function actualizar_egreso(i) {
    indice_actualizar=i
    var modal_actualizar_egreso=document.getElementById("modal_actualizar_egreso")
    modal_actualizar_egreso.showModal();
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var input_numero_cuenta_actualizar_egreso=document.getElementById("input_numero_cuenta_actualizar_egreso")
var input_date_actualizar_egreso=document.getElementById("input_date_actualizar_egreso")
var input_valor_actualizar_egreso = document.getElementById("input_valor_actualizar_egreso")
var nombre_tipo_actualizar_egreso=document.getElementById("nombre_tipo_actualizar_egreso")
var input_descripcion_egreso_actualizar=document.getElementById("input_descripcion_egreso_actualizar")
var numero_cuenta=lista_transacciones[i].cuenta_bancaria_relacionada
colocar_option_actualizar_egreso(i)
    input_date_actualizar_egreso.value=lista_transacciones[i].fecha_transaccion
    input_valor_actualizar_egreso.value=lista_transacciones[i].valor_transaccion
    nombre_tipo_actualizar_egreso.value=lista_transacciones[i].tipo_ingreso_egreso
    input_descripcion_egreso_actualizar.value=lista_transacciones[i].descripcion



}
function cerrar_modal_actualizar_egreso() {
    var modal_actualizar_egreso=document.getElementById("modal_actualizar_egreso")
    modal_actualizar_egreso.close();
}
function actualizar_transaccion_egreso() {
    

    var modal_actualizar_egreso=document.getElementById("modal_actualizar_egreso")
  
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var input_numero_cuenta_actualizar_egreso=document.getElementById("input_numero_cuenta_actualizar_egreso")
var input_date_actualizar_egreso=document.getElementById("input_date_actualizar_egreso")
var input_valor_actualizar_egreso = document.getElementById("input_valor_actualizar_egreso")
var nombre_tipo_actualizar_egreso=document.getElementById("nombre_tipo_actualizar_egreso")
var input_descripcion_egreso_actualizar=document.getElementById("input_descripcion_egreso_actualizar")
console.log(lista_transacciones[indice_actualizar].cuenta_bancaria_relacionada)
if (input_valor_actualizar_egreso.value=="") {
   alert("escriba el valor") 
}else{
    if (parseInt(input_valor_actualizar_egreso.value,10)>0) {
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                if (lista_cuentas_bancarias[index].numero_de_cuenta==lista_transacciones[indice_actualizar].cuenta_bancaria_relacionada) {
                    var saldo_anterior=lista_cuentas_bancarias[index].saldo
                    lista_cuentas_bancarias[index].saldo=(saldo_anterior-input_valor_actualizar_egreso.value+(lista_transacciones[indice_actualizar].valor_transaccion*1))-1+1
                    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
                }
            }
            
        }
        lista_transacciones[indice_actualizar].tipo_transaccion="egreso"
        lista_transacciones[indice_actualizar].tipo_ingreso_egreso=nombre_tipo_actualizar_egreso.value
        lista_transacciones[indice_actualizar].valor_transaccion=input_valor_actualizar_egreso.value
        lista_transacciones[indice_actualizar].cuenta_bancaria_relacionada=input_numero_cuenta_actualizar_egreso.value
        lista_transacciones[indice_actualizar].fecha_transaccion=input_date_actualizar_egreso.value
        lista_transacciones[indice_actualizar].descripcion=input_descripcion_egreso_actualizar.value
        localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
        modal_actualizar_egreso.close();
        window.location.href="gestiontransacciones.html"
    }else{
        alert("Actualización invalida")
    }
    
}
}
function actualizar(index) {
    
    var subindex=index.substring(0,index.length-1)

    var parseindex=parseInt(subindex,10)
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
     if (lista_transacciones[parseindex].tipo_transaccion=="egreso") {
        actualizar_egreso(parseindex)
    }else{
        actualizar_ingreso(parseindex)
}

}
function colocar_option_actualizar_ingreso(i) {
    var input_numero_cuenta_actualizar_ingreso=document.getElementById("input_numero_cuenta_actualizar_ingreso")
    var nombre_tipo_actualizar_ingreso=document.getElementById("nombre_tipo_actualizar_ingreso")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    if (lista_cuentas_bancarias.length==0) {
        
    }else{
        
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                
            var option_numero=document.createElement("option")
            option_numero.setAttribute("value",lista_cuentas_bancarias[index].numero_de_cuenta)
            option_numero.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
            input_numero_cuenta_actualizar_ingreso.appendChild(option_numero)
            if (lista_transacciones[i].cuenta_bancaria_relacionada==lista_cuentas_bancarias[index].numero_de_cuenta) {
                input_numero_cuenta_actualizar_ingreso.value=lista_transacciones[i].cuenta_bancaria_relacionada
            }
            }
        }
       
    }
    if (tipos.length==0) {
        
    }else{
        
        
        for (let index = 0; index < tipos.length; index++) {
            if (tipos[index].tipo=="ingreso") {
                var option_numero=document.createElement("option")
            option_numero.setAttribute("value",tipos[index].nombre_tipo)
            option_numero.appendChild(document.createTextNode(tipos[index].nombre_tipo))
            nombre_tipo_actualizar_ingreso.appendChild(option_numero)
            }
            
            
     }
    }
}
function actualizar_ingreso(i) {
    indice_actualizar=i
    var modal_actualizar_ingreso=document.getElementById("modal_actualizar_ingreso")
    modal_actualizar_ingreso.showModal();
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var input_numero_cuenta_actualizar_ingreso=document.getElementById("input_numero_cuenta_actualizar_ingreso")
var input_date_actualizar_ingreso=document.getElementById("input_date_actualizar_ingreso")
var input_valor_actualizar_ingreso = document.getElementById("input_valor_actualizar_ingreso")
var nombre_tipo_actualizar_ingreso=document.getElementById("nombre_tipo_actualizar_ingreso")
var input_descripcion_ingreso_actualizar=document.getElementById("input_descripcion_ingreso_actualizar")
var numero_cuenta=lista_transacciones[i].cuenta_bancaria_relacionada
colocar_option_actualizar_ingreso(i)
input_date_actualizar_ingreso.value=lista_transacciones[i].fecha_transaccion
    input_valor_actualizar_ingreso.value=lista_transacciones[i].valor_transaccion
    nombre_tipo_actualizar_ingreso.value=lista_transacciones[i].tipo_ingreso_egreso
    input_descripcion_ingreso_actualizar.value=lista_transacciones[i].descripcion

}
function cerrar_modal_actualizar_ingreso() {
    var modal_actualizar_ingreso=document.getElementById("modal_actualizar_ingreso")
    modal_actualizar_ingreso.close();
}
function actualizar_transaccion_ingreso() {
    var modal_actualizar_ingreso=document.getElementById("modal_actualizar_ingreso")
  
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var input_numero_cuenta_actualizar_ingreso=document.getElementById("input_numero_cuenta_actualizar_ingreso")
var input_date_actualizar_ingreso=document.getElementById("input_date_actualizar_ingreso")
var input_valor_actualizar_ingreso = document.getElementById("input_valor_actualizar_ingreso")
var nombre_tipo_actualizar_ingreso=document.getElementById("nombre_tipo_actualizar_ingreso")
var input_descripcion_ingreso_actualizar=document.getElementById("input_descripcion_ingreso_actualizar")
console.log(lista_transacciones[indice_actualizar].cuenta_bancaria_relacionada)
if (input_valor_actualizar_ingreso.value=="") {
   alert("escriba el valor") 
}else{
    if (parseInt(input_valor_actualizar_ingreso.value,10)>0) {
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                if (lista_cuentas_bancarias[index].numero_de_cuenta==lista_transacciones[indice_actualizar].cuenta_bancaria_relacionada) {
                    var saldo_anterior=lista_cuentas_bancarias[index].saldo
                    lista_cuentas_bancarias[index].saldo=(saldo_anterior+(input_valor_actualizar_ingreso.value*1)-(lista_transacciones[indice_actualizar].valor_transaccion*1))-1+1
                    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
                }
            }
            
        }
        lista_transacciones[indice_actualizar].tipo_transaccion="ingreso"
        lista_transacciones[indice_actualizar].tipo_ingreso_egreso=nombre_tipo_actualizar_ingreso.value
        lista_transacciones[indice_actualizar].valor_transaccion=input_valor_actualizar_ingreso.value
        lista_transacciones[indice_actualizar].cuenta_bancaria_relacionada=input_numero_cuenta_actualizar_ingreso.value
        lista_transacciones[indice_actualizar].fecha_transaccion=input_date_actualizar_ingreso.value
        lista_transacciones[indice_actualizar].descripcion=input_descripcion_ingreso_actualizar.value
        localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
        modal_actualizar_egreso.close();
        window.location.href="gestiontransacciones.html"
    }else{
        alert("actualizacion invalida")
    }
    
}
}
function borrar_transaccion(index) {
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    
    if (lista_transacciones[index].tipo_transaccion=="ingreso") {
        for (let i = 0; i < lista_cuentas_bancarias.length; i++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                if (lista_transacciones[index].cuenta_bancaria_relacionada==lista_cuentas_bancarias[i].numero_de_cuenta) {
                    var saldo_anterior=lista_cuentas_bancarias[i].saldo
                    var transaccion=lista_transacciones[index].valor_transaccion
                    lista_cuentas_bancarias[i].saldo=saldo_anterior-transaccion
                    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
                }
            }
            
            
        }
    }else{
        for (let i = 0; i < lista_cuentas_bancarias.length; i++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                if (lista_transacciones[index].cuenta_bancaria_relacionada==lista_cuentas_bancarias[i].numero_de_cuenta) {
                    var saldo_anterior=lista_cuentas_bancarias[i].saldo
                    var transaccion=parseInt(lista_transacciones[index].valor_transaccion,10)
                    lista_cuentas_bancarias[i].saldo=saldo_anterior+transaccion
                    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
                }
            }
            
            
        }
    }
    lista_transacciones.splice(index, 1)
    localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
    window.location.href="gestiontransacciones.html"
    
}
function abrir_modal_crear_ingreso() {
    es_ingreso=true
    var modal_crear_ingreso=document.getElementById("modal_crear_ingreso")
   
    var input_numero_cuenta_crear_ingreso=document.getElementById("input_numero_cuenta_crear_ingreso")
    var nombre_tipo_ingreso=document.getElementById("nombre_tipo_ingreso")
    var hay_cuentas_bancarias=false
    if (lista_cuentas_bancarias.length==0) {
        
    }else{
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                hay_cuentas_bancarias=true;
                break;
            }
            
        }
        if (hay_cuentas_bancarias) {
            for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
                if (usuario.email==lista_cuentas_bancarias[index].email) {
                var option_numero=document.createElement("option")
                option_numero.setAttribute("value",lista_cuentas_bancarias[index].numero_de_cuenta)
                option_numero.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
                input_numero_cuenta_crear_ingreso.appendChild(option_numero)
                
                }
            }
            modal_crear_ingreso.showModal(); 
        }else{
            alert("no hay cuentas bancarias")
        }
        
    }
    if (tipos.length==0) {
        
    }else{
        
    
        for (let index = 0; index < tipos.length; index++) {
            if (tipos[index].tipo=="ingreso") {
                var option_numero=document.createElement("option")
            option_numero.setAttribute("value",tipos[index].nombre_tipo)
            option_numero.appendChild(document.createTextNode(tipos[index].nombre_tipo))
            nombre_tipo_ingreso.appendChild(option_numero)
            }
            
            
     }
    }
    
    
    

}
function abrir_modal_crear_egreso() {
    es_ingreso=false
    var cuentas_bancarias=false
    var modal_crear_egreso=document.getElementById("modal_crear_egreso")
    
    var input_numero_cuenta_crear_egreso=document.getElementById("input_numero_cuenta_crear_egreso")
    var nombre_tipo_egreso=document.getElementById("nombre_tipo_egreso")
    if (lista_cuentas_bancarias.length==0) {
        
    }else{
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (usuario.email==lista_cuentas_bancarias[index].email) {
                cuentas_bancarias=true
                break;
            }
        }
        if (cuentas_bancarias) {
            for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
                if (usuario.email==lista_cuentas_bancarias[index].email) {
                var option_numero=document.createElement("option")
                option_numero.setAttribute("value",lista_cuentas_bancarias[index].numero_de_cuenta)
                option_numero.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
                input_numero_cuenta_crear_egreso.appendChild(option_numero)
                
                }
            }
            modal_crear_egreso.showModal();
        }else{
            alert("no hay cuentas bancarias")
        }
        
    }
    if (tipos.length==0) {
        
    }else{
        
        
        for (let index = 0; index < tipos.length; index++) {
            if (tipos[index].tipo=="egreso") {
                var option_numero=document.createElement("option")
            option_numero.setAttribute("value",tipos[index].nombre_tipo)
            option_numero.appendChild(document.createTextNode(tipos[index].nombre_tipo))
            nombre_tipo_egreso.appendChild(option_numero)
            }
            
            
     }
    }
    
}
function crear_transaccion_egreso() {
    var input_date_crear_egreso=document.getElementById("input_date_crear_egreso")
    var input_valor_crear_egreso=document.getElementById("input_valor_crear_egreso")
    var parsevalor=parseInt(input_valor_crear_egreso.value)
    var input_descripcion_egreso=document.getElementById("input_descripcion_egreso")
    var img_egreso=document.getElementById("img_egreso")
    var input_numero_cuenta_crear_egreso=document.getElementById("input_numero_cuenta_crear_egreso")
    var nombre_tipo_egreso=document.getElementById("nombre_tipo_egreso")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")

    if (input_date_crear_egreso.value==""||input_valor_crear_egreso.value=="") {
        alert("escribar el valor y/o la fecha")
    }else{
        var fechas_actual = Date.now();
var fecha_hoy = new Date(fechas_actual)
var delta_fechas= new Date(input_date_crear_egreso.value)
        if (delta_fechas>fecha_hoy) {
            alert("fecha invalida")
        }else{
            if (parsevalor>0) {
                var agregar_transaccion=new gestion_transacciones(usuario.email,
                    "egreso",
                    nombre_tipo_egreso.value,
                    input_valor_crear_egreso.value,
                    input_numero_cuenta_crear_egreso.value,
                    input_date_crear_egreso.value,
                    input_descripcion_egreso.value,
                    img_egreso.src)
                    lista_transacciones.push(agregar_transaccion)
                    localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
                    window.location.href="gestiontransacciones.html"
                    cerrar_modal_crear_egreso()
                    
                    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
                        
                        if (lista_cuentas_bancarias[index].email==usuario.email) {
                            
                            if (lista_cuentas_bancarias[index].numero_de_cuenta==input_numero_cuenta_crear_egreso.value) {        
    
                                var saldo_resultante=lista_cuentas_bancarias[index].saldo-parsevalor
       
                                lista_cuentas_bancarias[index].saldo=saldo_resultante
                                break;
                            }
                        }
                        
                    }
                    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
    
            }else{
                alert("transaccion invalida")
            }
                    }
        


    }



}
function crear_transaccion_ingreso() {
    var input_date_crear_ingreso=document.getElementById("input_date_crear_ingreso")
    var input_valor_crear_ingreso=document.getElementById("input_valor_crear_ingreso")
    var parsevalor=parseInt(input_valor_crear_ingreso.value)
    
    var input_descripcion_ingreso=document.getElementById("input_descripcion_ingreso")
    var img_ingreso=document.getElementById("img_ingreso")
    var imagen=document.createElement("img")
    imagen.src=img_ingreso.src
    var input_numero_cuenta_crear_ingreso=document.getElementById("input_numero_cuenta_crear_ingreso")
    var nombre_tipo_ingreso=document.getElementById("nombre_tipo_ingreso")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    
    
    if (input_date_crear_ingreso.value==""||input_valor_crear_ingreso.value=="") {
        alert("escribar el valor y/o la fecha")
    }else{
        if (parseInt(input_valor_crear_ingreso.value,10)>0) {
            var fechas_actual = Date.now();
var fecha_hoy = new Date(fechas_actual)
var delta_fechas= new Date(input_date_crear_ingreso.value)
        if (delta_fechas>fecha_hoy) {
            alert("fecha invalida")
        }else{
            var agregar_transaccion=new gestion_transacciones(usuario.email,
                "ingreso",
                nombre_tipo_ingreso.value,
                input_valor_crear_ingreso.value,
                input_numero_cuenta_crear_ingreso.value,
                input_date_crear_ingreso.value,
                input_descripcion_ingreso.value,
                img_ingreso.src)
    
                lista_transacciones.push(agregar_transaccion)
                localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
               window.location.href="gestiontransacciones.html"
                cerrar_modal_crear_egreso()
    
                for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
                    
                    if (lista_cuentas_bancarias[index].email==usuario.email) {
                        
                        if (lista_cuentas_bancarias[index].numero_de_cuenta==input_numero_cuenta_crear_ingreso.value) {        
                            var saldo_resultante=((lista_cuentas_bancarias[index].saldo*1)+parsevalor)+1-1

                            lista_cuentas_bancarias[index].saldo=saldo_resultante
                            break;
                        }
                    }
                    
                }
                localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
            
        }
        }else{
            alert("transaccion invalida")
        }
                
        

    
    }
    
}
function cerrar_modal_crear_egreso() {
    var input_date_crear_egreso=document.getElementById("input_date_crear_egreso")
    input_date_crear_egreso.value=""
    var input_valor_crear_egreso=document.getElementById("input_valor_crear_egreso")
    input_valor_crear_egreso.value=""
    var input_descripcion_egreso=document.getElementById("input_descripcion_egreso")
    input_descripcion_egreso.value=""
    var file_egreso=document.getElementById("file_egreso")
    file_egreso.value=""
    var img_egreso=document.getElementById("img_egreso")
    img_egreso.src=""
    var modal_crear_egreso=document.getElementById("modal_crear_egreso")
    modal_crear_egreso.close();
    
}
function cerrar_modal_crear_ingreso() {
    var modal_crear_ingreso=document.getElementById("modal_crear_ingreso")
    modal_crear_ingreso.close();
    var input_date_crear_ingreso=document.getElementById("input_date_crear_ingreso")
    input_date_crear_ingreso.value=""
    var input_valor_crear_ingreso=document.getElementById("input_valor_crear_ingreso")
    input_valor_crear_ingreso.value=""
    var input_descripcion_ingreso=document.getElementById("input_descripcion_ingreso")
    input_descripcion_ingreso.value=""
    var file_ingreso=document.getElementById("file_ingreso")
    file_ingreso.value=""
    var img_ingreso=document.getElementById("img_ingreso")
    img_ingreso.src=""
    
}
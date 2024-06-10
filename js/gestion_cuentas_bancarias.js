var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var cuenta_existente=false;
var cuentas_usuario=[];
window.onload=function () {
    colocar_nombre()
    read_cuentas_bancarias()
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
function read_cuentas_bancarias() {
    var lista_cuentas_banccarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    cuentas_usuario =[];
    for (let index = 0; index < lista_cuentas_banccarias.length; index++) {
        if (lista_cuentas_banccarias[index].email==usuario.email) {
            cuentas_usuario.push(lista_cuentas_banccarias[index])
        }
        
    }
    if (cuentas_usuario.length==0) {
        var vacio=document.createElement("div")
        vacio.setAttribute("id","vacio")
        var div_contenedor_general_cuentas_bancarias=document.getElementById("div_contenedor_general_cuentas_bancarias")
        vacio.appendChild(document.createTextNode("No hay cuentas registradas"))
        div_contenedor_general_cuentas_bancarias.appendChild(vacio)
        
    }else{
        var tabla=document.getElementById("tabla_gestion_cuentas_bancarias")
        for (let index = 0; index < cuentas_usuario.length; index++) {
            
            var fila=tabla.insertRow(-1)
            var columna=fila.insertCell(0);
            var columna1=fila.insertCell(1)
            columna1.appendChild(document.createTextNode(cuentas_usuario[index].numero_de_cuenta))

            var columna2=fila.insertCell(2)
            columna2.appendChild(document.createTextNode(cuentas_usuario[index].nombre_banco))
            
            var columna3=fila.insertCell(3)
            columna3.appendChild(document.createTextNode(cuentas_usuario[index].tipo_cuenta))
            
            var columna4=fila.insertCell(4)
            columna4.appendChild(document.createTextNode(cuentas_usuario[index].estado_cuenta))

            var columna5=fila.insertCell(5)
            columna5.appendChild(document.createTextNode(cuentas_usuario[index].saldo))

            var columna6=fila.insertCell(6)
            columna6.appendChild(document.createTextNode(cuentas_usuario[index].fecha_apertura))

            var columna6=fila.insertCell(7)
            columna6.appendChild(document.createTextNode(cuentas_usuario[index].descripcion))

        }   
    }
}
function limpiar_texto() {
    var input_numero_cuenta_modal_crear=document.getElementById("input_numero_cuenta_modal_crear")
    var input_saldo_modal_crear=document.getElementById("input_saldo_modal_crear")
    var input_descripcion_moda_crear=document.getElementById("input_descripcion_moda_crear")
    input_numero_cuenta_modal_crear.value=""
    input_saldo_modal_crear.value=""
    input_descripcion_moda_crear.value=""

    var vacio=document.getElementById("vacio")
        var div_contenedor_general_cuentas_bancarias=document.getElementById("div_contenedor_general_cuentas_bancarias")
        if (vacio==null) {
            
        }else{
            div_contenedor_general_cuentas_bancarias.removeChild(vacio)
        }
        
}
function limpiar() {
    // var acomulador=1;
    // console.log(cuentas_usuario)
    // var tabla=document.getElementById("tabla_gestion_cuentas_bancarias")
    
    // var tamano_cuentas=cuentas_usuario.length
    // console.log(tamano_cuentas)
    // if (tamano_cuentas-1<1) {
        
    // } else {
    //     for (let index = 1; index < tamano_cuentas; index++) {
            
    //         tabla.deleteRow(1)
    //         acomulador=1;
    //     }
    // } en vez de hacer toda esta vuelta, mejor simplemente se reinicia la pagina y como esta muestra automaticamente todas las cuentas pues que lo haga y ya, no hay problema
    window.location.href="gestioncuentasbancarias.html"

    
        
}
function vincular() {
    cuenta_existente=false
    var input_numero_cuenta_modal_crear=document.getElementById("input_numero_cuenta_modal_crear")
    var input_banco_cuenta_modal_crear=document.getElementById("input_banco_cuenta_modal_crear")
    var input_tipo_cuenta_modal_crear=document.getElementById("input_tipo_cuenta_modal_crear")
    var input_saldo_modal_crear=document.getElementById("input_saldo_modal_crear")
    var input_fecha_modal_crear=document.getElementById("input_fecha_modal_crear")
    var input_descripcion_moda_crear=document.getElementById("input_descripcion_moda_crear")
    var input_estado_modal_crear=document.getElementById("input_estado_modal_crear")

if (input_numero_cuenta_modal_crear.value==""||input_saldo_modal_crear.value=="") {
    alert("escriba el numero de cuenta y/o el saldo")
} else {

    var fechas_actual = Date.now();
    var fecha_hoy = new Date(fechas_actual)
    var delta_fechas= new Date(input_fecha_modal_crear.value)
            if (delta_fechas>fecha_hoy) {
                alert("fecha invalida")
           
        }else{
            var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
            if (!(lista_cuentas_bancarias.length==0)) {
                
                for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
                    if (usuario.email==lista_cuentas_bancarias[index].email) {
                        if (lista_cuentas_bancarias[index].numero_de_cuenta==input_numero_cuenta_modal_crear.value &&lista_cuentas_bancarias[index].nombre_banco==input_banco_cuenta_modal_crear.value&&lista_cuentas_bancarias[index].tipo_cuenta== input_tipo_cuenta_modal_crear.value) {
                            
                            cuenta_existente=true
                        }
                    }
                    
                }
                
            }
                if (cuenta_existente) {
                    alert("cuenta ya existente")
                }else{
                    var vincular_cuenta=new gestion_cuentas_bancarias(usuario.email,input_numero_cuenta_modal_crear.value,
                        input_banco_cuenta_modal_crear.value,
                        input_tipo_cuenta_modal_crear.value,
                        input_saldo_modal_crear.value,
                        input_estado_modal_crear.value,
                        input_fecha_modal_crear.value,
                        input_descripcion_moda_crear.value )
            
                        lista_cuentas_bancarias.push(vincular_cuenta)
                        localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
                        console.log("deberia salir")
                        cerrar_modal_crear()
                        limpiar()
                        
                        
                }
                    
                     
                
               
            
        
    }
    
    
}

}

function cerrar_modal_crear() {
    var modal_crear=document.getElementById("modal_crear")
    modal_crear.close();
    limpiar_texto()
}   
function abrir_modal_crear() {
    var modal_crear=document.getElementById("modal_crear")
    modal_crear.showModal();
}
function abrir_modal_actualizar(){
    var primera__cuenta;
    cuentas_usuario=[];
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.showModal();
    var input_numero_cuenta_modal_actualizar=document.getElementById("input_numero_cuenta_modal_actualizar")
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
        if (lista_cuentas_bancarias[index].email==usuario.email) {
            cuentas_usuario.push(lista_cuentas_bancarias[index])
        }
        
    }
    if ( cuentas_usuario.length==0) {
        
    }else{
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (lista_cuentas_bancarias[index].email==usuario.email) {
                var option=document.createElement("option")
                option.setAttribute("value",index)
                option.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
                input_numero_cuenta_modal_actualizar.appendChild(option)
                console.log(option.getAttribute("value"))  
            }
        
        
        }
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (lista_cuentas_bancarias[index].email==usuario.email) {
                primera__cuenta=index
                break;  
            }
        
        }

        llenar_datos_actualizacion(primera__cuenta)
        
    }
    
}
function cerrar_modal_actualizar(){
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close();
    limpiar_texto_actualizar()
}
function limpiar_texto_actualizar() {
    var input_saldo_modal_actualizar=document.getElementById("input_saldo_modal_actualizar")
    var input_descripcion_modal_actualizar=document.getElementById("input_descripcion_modal_actualizar")
    input_saldo_modal_actualizar.value=""
    input_descripcion_modal_actualizar.value=""
    var input_banco_cuenta_modal_actualizar=document.getElementById("input_banco_cuenta_modal_actualizar")
    input_banco_cuenta_modal_actualizar.value="Bancolombia"

    
}
function llenar_datos_actualizacion(index) {
    
    var parseindex=parseInt(index,10)
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
var numero=lista_cuentas_bancarias[parseindex].numero_de_cuenta
    var input_numero_cuenta_modal_actualizar=document.getElementById("input_numero_cuenta_modal_actualizar")
    input_numero_cuenta_modal_actualizar=numero
    
    var input_banco_cuenta_modal_actualizar=document.getElementById("input_banco_cuenta_modal_actualizar")
     input_banco_cuenta_modal_actualizar.value=lista_cuentas_bancarias[parseindex].nombre_banco

     var input_tipo_cuenta_modal_actualizar=document.getElementById("input_tipo_cuenta_modal_actualizar")
     input_tipo_cuenta_modal_actualizar.value=lista_cuentas_bancarias[parseindex].tipo_cuenta

     var input_estado_modal_actualizar=document.getElementById("input_estado_modal_actualizar")
    input_estado_modal_actualizar.value=lista_cuentas_bancarias[parseindex].estado_cuenta

    var input_saldo_modal_actualizar=document.getElementById("input_saldo_modal_actualizar")
    input_saldo_modal_actualizar.value=lista_cuentas_bancarias[parseindex].saldo

    var input_descripcion_modal_actualizar=document.getElementById("input_descripcion_modal_actualizar")
    input_descripcion_modal_actualizar.value=lista_cuentas_bancarias[parseindex].descripcion

    var input_fecha_modal_actualizar=document.getElementById("input_fecha_modal_actualizar")
    input_fecha_modal_actualizar.value=lista_cuentas_bancarias[parseindex].fecha_apertura
    

}
function cambiar_valores_actualizar() {
    
var input_numero_cuenta_modal_actualizar=document.getElementById("input_numero_cuenta_modal_actualizar")
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")

    var input_banco_cuenta_modal_actualizar=document.getElementById("input_banco_cuenta_modal_actualizar")
     input_banco_cuenta_modal_actualizar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_actualizar.value].nombre_banco

     var input_tipo_cuenta_modal_actualizar=document.getElementById("input_tipo_cuenta_modal_actualizar")
     input_tipo_cuenta_modal_actualizar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_actualizar.value].tipo_cuenta

     var input_estado_modal_actualizar=document.getElementById("input_estado_modal_actualizar")
    input_estado_modal_actualizar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_actualizar.value].estado_cuenta

    var input_saldo_modal_actualizar=document.getElementById("input_saldo_modal_actualizar")
    input_saldo_modal_actualizar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_actualizar.value].saldo
    var input_descripcion_modal_actualizar=document.getElementById("input_descripcion_modal_actualizar")
    input_descripcion_modal_actualizar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_actualizar.value].descripcion

    var input_fecha_modal_actualizar=document.getElementById("input_fecha_modal_actualizar")
    input_fecha_modal_actualizar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_actualizar.value].fecha_apertura
     

   
  
    
}
function actualizar_cuenta() {
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    var input_numero_cuenta_modal_actualizar=document.getElementById("input_numero_cuenta_modal_actualizar").value
    
    var input_tipo_cuenta_modal_actualizar=document.getElementById("input_tipo_cuenta_modal_actualizar").value
    var input_banco_cuenta_modal_actualizar=document.getElementById("input_banco_cuenta_modal_actualizar").value
    var input_saldo_modal_actualizar=document.getElementById("input_saldo_modal_actualizar").value
    var input_estado_modal_actualizar=document.getElementById("input_estado_modal_actualizar").value
    var input_descripcion_modal_actualizar=document.getElementById("input_descripcion_modal_actualizar").value
    var input_fecha_modal_actualizar=document.getElementById("input_fecha_modal_actualizar").value

    if (input_saldo_modal_actualizar.value=="") {
        alert("escriba_el_saldo")
    } else {
        var fechas_actual = Date.now();
        var fecha_hoy = new Date(fechas_actual)
        var delta_fechas= new Date(input_fecha_modal_actualizar.value)
                if (delta_fechas>fecha_hoy) {
                    alert("fecha invalida")
               
            }else{
    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
        if (index==input_numero_cuenta_modal_actualizar) {
            lista_cuentas_bancarias[index].nombre_banco=input_banco_cuenta_modal_actualizar
            lista_cuentas_bancarias[index].tipo_cuenta=input_tipo_cuenta_modal_actualizar
            lista_cuentas_bancarias[index].descripcion=input_descripcion_modal_actualizar
            lista_cuentas_bancarias[index].saldo=input_saldo_modal_actualizar
            lista_cuentas_bancarias[index].estado_cuenta=input_estado_modal_actualizar
            lista_cuentas_bancarias[index].fecha_apertura=input_fecha_modal_actualizar
            break;
        }
        
    }
    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))
    limpiar();
}

}
   
}
function cerrar_modal_borrar() {
    var modal_borrar=document.getElementById("modal_borrar")
    modal_borrar.close();
}
function mostrar_borrar() {
    var primera__cuenta;
    cuentas_usuario=[];
    var modal_borrar=document.getElementById("modal_borrar")
    modal_borrar.showModal();
    var input_numero_cuenta_modal_borrar=document.getElementById("input_numero_cuenta_modal_borrar")
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
        if (lista_cuentas_bancarias[index].email==usuario.email) {
            cuentas_usuario.push(lista_cuentas_bancarias[index])
        }
        
    }
    if ( cuentas_usuario.length==0) {
        
    }else{
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (lista_cuentas_bancarias[index].email==usuario.email) {
                var option=document.createElement("option")
                option.setAttribute("value",index)
                option.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
                input_numero_cuenta_modal_borrar.appendChild(option)
                console.log(option.getAttribute("value"))  
            }
        
        
        }
        for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
            if (lista_cuentas_bancarias[index].email==usuario.email) {
                primera__cuenta=index
                break;  
            }
        
        }

        llenar_datos_borrar(primera__cuenta)
        
    }
}
function llenar_datos_borrar(index) {
    
    var parseindex=parseInt(index,10)
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
var numero=lista_cuentas_bancarias[parseindex].numero_de_cuenta

    var input_numero_cuenta_modal_borrar=document.getElementById("input_numero_cuenta_modal_borrar")
    input_numero_cuenta_modal_borrar=numero
    
    var input_banco_cuenta_modal_borrar=document.getElementById("input_banco_cuenta_modal_borrar")
    input_banco_cuenta_modal_borrar.value=lista_cuentas_bancarias[parseindex].nombre_banco

     var input_tipo_cuenta_modal_borrar=document.getElementById("input_tipo_cuenta_modal_borrar")
     input_tipo_cuenta_modal_borrar.value=lista_cuentas_bancarias[parseindex].tipo_cuenta

     var input_estado_modal_borrar=document.getElementById("input_estado_modal_borrar")
     input_estado_modal_borrar.value=lista_cuentas_bancarias[parseindex].estado_cuenta

    var input_saldo_modal_borrar=document.getElementById("input_saldo_modal_borrar")
    input_saldo_modal_borrar.value=lista_cuentas_bancarias[parseindex].saldo

    var input_fecha_modal_borrar=document.getElementById("input_fecha_modal_borrar")
    input_fecha_modal_borrar.value=lista_cuentas_bancarias[parseindex].fecha_apertura
    

}
function cambiar_cuenta_borrar() {
var input_numero_cuenta_modal_borrar=document.getElementById("input_numero_cuenta_modal_borrar")
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    
    var input_banco_cuenta_modal_borrar=document.getElementById("input_banco_cuenta_modal_borrar")
    input_banco_cuenta_modal_borrar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_borrar.value].nombre_banco

     var input_tipo_cuenta_modal_borrar=document.getElementById("input_tipo_cuenta_modal_borrar")
     input_tipo_cuenta_modal_borrar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_borrar.value].tipo_cuenta

     var input_estado_modal_borrar=document.getElementById("input_estado_modal_borrar")
     input_estado_modal_borrar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_borrar.value].estado_cuenta

    var input_saldo_modal_borrar=document.getElementById("input_saldo_modal_borrar")
    input_saldo_modal_borrar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_borrar.value].saldo

    var input_fecha_modal_borrar=document.getElementById("input_fecha_modal_borrar")
    input_fecha_modal_borrar.value=lista_cuentas_bancarias[input_numero_cuenta_modal_borrar.value].fecha_apertura
    
  
    
}
function borrar_cuenta() {
    var input_numero_cuenta_modal_borrar=document.getElementById("input_numero_cuenta_modal_borrar").value
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    for (let index = 0; index < lista_transacciones.length; index++) {
        
        if (lista_transacciones[index].email==usuario.email) {
            console.log(lista_transacciones[index].cuenta_bancaria_relacionada)
            console.log(lista_cuentas_bancarias[input_numero_cuenta_modal_borrar].numero_de_cuenta)
            if (lista_transacciones[index].cuenta_bancaria_relacionada==lista_cuentas_bancarias[input_numero_cuenta_modal_borrar].numero_de_cuenta) {
                console.log("entre")
                lista_transacciones.splice(index,1)
            }
        }
        
    }
    localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
    lista_cuentas_bancarias.splice(input_numero_cuenta_modal_borrar, 1)

    localStorage.setItem("json_gestion_cuentas_bancarias",JSON.stringify(lista_cuentas_bancarias))

    limpiar();
}
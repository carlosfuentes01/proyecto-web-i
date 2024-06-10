var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
var tipos=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
//se colocan aqui lista cuentas y tipos ya que al no cambiarse, seria mas eficiente tenerlos por aca
var es_ingreso;
var cuenta_existente;
var cuenta_almacenada=false;
var indice_actualizar;
window.onload=function () {
    read_transacciones_completas()
    
    colocar_cuentas();
}
function colocar_cuentas() {
    var select_cuenta=document.getElementById("select_cuenta")
    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
        if (usuario.email==lista_cuentas_bancarias[index].email) {
            var option=document.createElement("option")
            option.setAttribute("value",lista_cuentas_bancarias[index].numero_de_cuenta)
            option.appendChild(document.createTextNode(lista_cuentas_bancarias[index].numero_de_cuenta))
            select_cuenta.appendChild(option)
        }
        
    }
}
function filtrar() {
    var select_cuenta=document.getElementById("select_cuenta")
    var tabla_gestion_transacciones_completa=document.getElementById("tabla_gestion_transacciones_completa")
    tabla_gestion_transacciones_completa.remove()
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var transacciones_del_usuario=[];
    var tabla=document.createElement("table")
        tabla.setAttribute("id","tabla_gestion_transacciones_completa")
        // se coloco la tabla por aca para que independientemente si hay registros o no siempre exista
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
        
        var tamano=transacciones_del_usuario.length
        for (let index = 0; index < tamano; index++) {
            if (select_cuenta.value==transacciones_del_usuario[index].cuenta_bancaria_relacionada) {
            
            var fila=tabla.insertRow(-1)
            var columna=fila.insertCell(0)
            var columna1=fila.insertCell(1)
            columna1.appendChild(document.createTextNode(transacciones_del_usuario[index].fecha_transaccion))

            var columna2=fila.insertCell(2)
            columna2.appendChild(document.createTextNode(transacciones_del_usuario[index].tipo_transaccion))
            
            var columna3=fila.insertCell(3)

            columna3.appendChild(document.createTextNode(transacciones_del_usuario[index].tipo_ingreso_egreso))
            
            var columna4=fila.insertCell(4)
            columna4.appendChild(document.createTextNode(transacciones_del_usuario[index].descripcion))

            var columna5=fila.insertCell(5)
            columna5.appendChild(document.createTextNode(transacciones_del_usuario[index].valor_transaccion))

            var columna6=fila.insertCell(6)
            columna6.appendChild(document.createTextNode(transacciones_del_usuario[index].cuenta_bancaria_relacionada))

            var columna7=fila.insertCell(7)
            var img_adjunto=document.createElement("img")
            if (transacciones_del_usuario[index].adjunto==""||transacciones_del_usuario[index].adjunto==undefined) {
                
            }else{
                img_adjunto.src=transacciones_del_usuario[index].adjunto
         }
         columna7.appendChild(img_adjunto)

            var columna8=fila.insertCell(8)
            var botoneditar=document.createElement("button")
            botoneditar.appendChild(document.createTextNode("editar"))
            botoneditar.setAttribute("class","boton_editar_tabla")
            
            botoneditar.setAttribute("id",index)
            console.log("la id es")
            console.log(index)
            botoneditar.setAttribute("onclick","actualizar(getAttribute('id'))")
            var botonborrar=document.createElement("button")
            botonborrar.appendChild(document.createTextNode("borrar"))
            botonborrar.setAttribute("id",index)
            botonborrar.setAttribute("onclick","borrar_transaccion(getAttribute('id'))")
            botonborrar.setAttribute("class","boton_borrar_tabla") 
            //la razon por la cual tanto el boton editar como el borrar tienen el mismo id 
            // es porque solo se va a usar su id para obtener el mismo indice,pero del resto no se va
            //a recuperrar ni buscar informacion de ninguno
            columna8.appendChild(botoneditar)
            columna8.appendChild(botonborrar)
            colocar_saldo()
            
            }
        }   
    }
    document.body.appendChild(tabla)
}
function colocar_saldo() {
    var saldo_cuenta_seleccionada=document.getElementById("saldo_cuenta_seleccionada")
    var select_cuenta=document.getElementById("select_cuenta")
    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
        if (usuario.email==lista_cuentas_bancarias[index].email) {
            if (select_cuenta.value==lista_cuentas_bancarias[index].numero_de_cuenta) {
                saldo_cuenta_seleccionada.value=lista_cuentas_bancarias[index].saldo
            }
        }
        
    }
}
function read_transacciones_completas() {
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
        var tabla=document.getElementById("tabla_gestion_transacciones_completa")
        var tamano=transacciones_del_usuario.length
        for (let index = 0; index < tamano; index++) {
            console.log(index)
            var fila=tabla.insertRow(-1)
            var columna=fila.insertCell(0)
            var columna1=fila.insertCell(1)
            columna1.appendChild(document.createTextNode(transacciones_del_usuario[index].fecha_transaccion))

            var columna2=fila.insertCell(2)
            columna2.appendChild(document.createTextNode(transacciones_del_usuario[index].tipo_transaccion))
            
            var columna3=fila.insertCell(3)

            columna3.appendChild(document.createTextNode(transacciones_del_usuario[index].tipo_ingreso_egreso))
            
            var columna4=fila.insertCell(4)
            columna4.appendChild(document.createTextNode(transacciones_del_usuario[index].descripcion))

            var columna5=fila.insertCell(5)
            columna5.appendChild(document.createTextNode(transacciones_del_usuario[index].valor_transaccion))

            var columna6=fila.insertCell(6)
            columna6.appendChild(document.createTextNode(transacciones_del_usuario[index].cuenta_bancaria_relacionada))

            var columna7=fila.insertCell(7)
            var img_adjunto=document.createElement("img")
            if (transacciones_del_usuario[index].adjunto==""||transacciones_del_usuario[index].adjunto==undefined) {
                
            }else{
                img_adjunto.src=transacciones_del_usuario[index].adjunto
         }
         columna7.appendChild(img_adjunto)

            var columna8=fila.insertCell(8)
            var botoneditar=document.createElement("button")
            botoneditar.appendChild(document.createTextNode("editar"))
            botoneditar.setAttribute("class","boton_editar_tabla")
            botoneditar.setAttribute("id",index)
            botoneditar.setAttribute("onclick","actualizar(getAttribute('id'))")
            var botonborrar=document.createElement("button")
            botonborrar.appendChild(document.createTextNode("borrar"))
            botonborrar.setAttribute("id",index)
            botonborrar.setAttribute("onclick","borrar_transaccion(getAttribute('id'))")
            botonborrar.setAttribute("class","boton_borrar_tabla")  
            columna8.appendChild(botoneditar)
            columna8.appendChild(botonborrar)
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
    console.log(index+"primer indice")
    var subindex=index.substring(0,index.length-1)
    console.log(subindex+"indice sin lo ultimo")
    var parseindex=parseInt(subindex,10)
    console.log(index+"indice parseado")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
     if (lista_transacciones[index].tipo_transaccion=="egreso") {
        actualizar_egreso(index)
    }else{
        actualizar_ingreso(index)
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
    console.log(index)
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
    window.location.href="gestiontransaccionestodo.html"
    
}


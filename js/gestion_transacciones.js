var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
window.onload=function () {
    colocar_nombre()
    read_transacciones()
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
        vacio.appendChild(document.createTextNode("No hay cuentas registradas"))
        div_contenedor_general_cuentas_bancarias.appendChild(vacio)
        
    }else{
        var tabla=document.getElementById("tabla_gestion_transacciones")
        var tamano=transacciones_del_usuario.length
        if (tamano>3) {
            tamano=3
        }
        for (let index = 0; index < tamano; index++) {
            
            var fila=tabla.insertRow(-1)

            var columna1=fila.insertCell(0)
            columna1.appendChild(document.createTextNode(transacciones_del_usuario[index].fecha_transaccion))

            var columna2=fila.insertCell(1)
            columna2.appendChild(document.createTextNode(transacciones_del_usuario[index].tipo_transaccion))
            
            var columna3=fila.insertCell(2)
            columna3.appendChild(document.createTextNode(transacciones_del_usuario[index].descripcion))
            
            var columna4=fila.insertCell(3)
            columna4.appendChild(document.createTextNode(transacciones_del_usuario[index].valor_transaccion))

            var columna5=fila.insertCell(4)
            columna5.appendChild(document.createTextNode(transacciones_del_usuario[index].cuenta_bancaria_relacionada))

            var columna6=fila.insertCell(5)
            var botoneditar=document.createElement("button")
            botoneditar.appendChild(document.createTextNode("editar"))
            botoneditar.setAttribute("class","boton_editar_tabla") 
            var botonborrar=document.createElement("button")
            botonborrar.appendChild(document.createTextNode("borrar"))
            botonborrar.setAttribute("class","boton_borrar_tabla")  
            columna6.appendChild(botoneditar)
            columna6.appendChild(botonborrar)

        }   
    }
}
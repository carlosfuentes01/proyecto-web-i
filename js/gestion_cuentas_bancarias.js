var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
window.onload=function () {
    colocar_nombre()
    read_cuentas_bancarias()
}
function colocar_nombre() {
    document.querySelector("#nombre_usuario_inside_div_superior_derecha_inside_div_superior").innerHTML=usuario.nombre+" "+usuario.apellido
}
function read_cuentas_bancarias() {
    var lista_cuentas_banccarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    var cuentas_usuario=[];
    for (let index = 0; index < lista_cuentas_banccarias.length; index++) {
        if (lista_cuentas_banccarias[index].email==usuario.email) {
            cuentas_usuario.push(lista_cuentas_banccarias[index])
        }
        
    }
    if (cuentas_usuario.length==0) {
        var vacio=document.createElement("div")
        var div_contenedor_general_cuentas_bancarias=document.getElementById("div_contenedor_general_cuentas_bancarias")
        vacio.appendChild(document.createTextNode("No hay cuentas registradas"))
        div_contenedor_general_cuentas_bancarias.appendChild(vacio)
        
    }else{
        var tabla=document.getElementById("tabla_gestion_cuentas_bancarias")
        for (let index = 0; index < cuentas_usuario.length; index++) {
            
            var fila=tabla.insertRow(-1)

            var columna1=fila.insertCell(0)
            columna1.appendChild(document.createTextNode(cuentas_usuario[index].numero_de_cuenta))

            var columna2=fila.insertCell(1)
            columna2.appendChild(document.createTextNode(cuentas_usuario[index].nombre_banco))
            
            var columna3=fila.insertCell(2)
            columna3.appendChild(document.createTextNode(cuentas_usuario[index].tipo_cuenta))
            
            var columna4=fila.insertCell(3)
            columna4.appendChild(document.createTextNode(cuentas_usuario[index].saldo))

            var columna5=fila.insertCell(4)
            columna5.appendChild(document.createTextNode(cuentas_usuario[index].estado_cuenta))

            var columna6=fila.insertCell(5)
            columna6.appendChild(document.createTextNode(cuentas_usuario[index].fecha_apertura))

            var columna6=fila.insertCell(6)
            columna6.appendChild(document.createTextNode(cuentas_usuario[index].descripcion))

        }   
    }
}
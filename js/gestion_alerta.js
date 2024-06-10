var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var indice_cambiar;
window.onload=function () {
    colocar_nombre()
    read_alertas()
}
function colocar_nombre() {
    
    document.querySelector("#nombre_usuario_inside_div_superior_derecha_inside_div_superior").innerHTML=usuario.nombre+" "+usuario.apellido
}
function read_alertas() {
  
    var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
     if (lista_alertas.length==0) {
         var vacio=document.createElement("div")
         vacio.setAttribute("id","vacio")
         var div_contenedor_general=document.getElementById("div_contenedor_general")
         vacio.appendChild(document.createTextNode("No hay alertas registrados"))
         div_contenedor_general.appendChild(vacio)
     }else{
         var tabla=document.getElementById("tabla_alertas")
         for (let index = 0; index < lista_alertas.length; index++) {
            
             var fila=tabla.insertRow(-1)
             var columna=fila.insertCell(0);
             var columna1=fila.insertCell(1)
             columna1.appendChild(document.createTextNode(lista_alertas[index].fecha_hora_alerta))

             var columna2=fila.insertCell(2)
             columna2.appendChild(document.createTextNode(lista_alertas[index].tipo_alerta))
            
             var columna3=fila.insertCell(3)
             columna3.appendChild(document.createTextNode(lista_alertas[index].descripcion_alerta))

            var columna4=fila.insertCell(4)
             columna4.appendChild(document.createTextNode(lista_alertas[index].opcion_repeticion))

             var columna5=fila.insertCell(5)
             var botonborrar=document.createElement("button")
             botonborrar.appendChild(document.createTextNode("borrar"))
             botonborrar.setAttribute("id",index)
             console.log(botonborrar.getAttribute("id"))
             botonborrar.setAttribute("onclick","borrar(getAttribute('id'))")
             

             var botoneditar=document.createElement("button")
             botoneditar.appendChild(document.createTextNode("editar"))
             botoneditar.setAttribute("id",index)
             console.log(botoneditar.getAttribute("id"))
             botoneditar.setAttribute("onclick","abrir_modal_actualizar(getAttribute('id'))")
             columna5.appendChild(botoneditar)
             columna5.appendChild(botonborrar)

         }   
     }
     

}
function abrir_moda_crear() {
    var modal_crear=document.getElementById("modal_crear")
    modal_crear.showModal();
}
function cerrar_crear() {
    var modal_crear=document.getElementById("modal_crear")
    modal_crear.close();
    let input_descripcion=document.getElementById("input_descripcion-crear")
    let input_date=document.getElementById("input_date-crear")
    input_descripcion.value=""
    input_date.value=""
}
function crear() {
    let input_descripcion=document.getElementById("input_descripcion-crear")
    let input_date=document.getElementById("input_date-crear")
    let input_repeticion=document.getElementById("input_repeticion-crear")
    let input_tipo=document.getElementById("input_tipo-crear")
    if (input_date=="") {
        alert("llene la fecha")
    }else{
        var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
        var alerta=new gestion_alertar(usuario.email,
            input_tipo.value,
            input_descripcion.value,
            input_date.value,
            input_repeticion.value)
            lista_alertas.push(alerta)
        localStorage.setItem("json_gestion_alertas",JSON.stringify(lista_alertas))
    }
    cerrar_crear()
    window.location.href="gestionalertas.html"
}
function abrir_modal_actualizar(id) {
    indice_cambiar=id
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.showModal();
    var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
    var index=parseInt(indice_cambiar,10)
    let input_descripcion=document.getElementById("input_descripcion-actualizar")
    let input_date=document.getElementById("input_date-actualizar")
    let input_repeticion=document.getElementById("input_repeticion-actualizar")
    let input_tipo=document.getElementById("input_tipo-actualizar")
    input_descripcion.value=lista_alertas[index].descripcion_alerta
    input_date.value=lista_alertas[index].fecha_hora_alerta
    input_repeticion.value=lista_alertas[index].opcion_repeticion
    input_tipo.value=lista_alertas[index].tipo_alerta

}
function actualizar() {
    var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
    var index=parseInt(indice_cambiar,10)
    let input_descripcion=document.getElementById("input_descripcion-actualizar")
    let input_date=document.getElementById("input_date-actualizar")
    let input_repeticion=document.getElementById("input_repeticion-actualizar")
    let input_tipo=document.getElementById("input_tipo-actualizar")
    if (input_date=="") {
        alert("llene la fecha")
    }else{
        lista_alertas[index].descripcion_alerta=input_descripcion.value
        lista_alertas[index].fecha_hora_alerta=input_date.value
        lista_alertas[index].opcion_repeticion=input_repeticion.value
        lista_alertas[index].tipo_alerta=input_tipo.value
        localStorage.setItem("json_gestion_alertas",JSON.stringify(lista_alertas))
        cerrar_actualizar()
        window.location.href="gestionalertas.html"
    }
}
function cerrar_actualizar() {
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close();

}
function borrar(id) {
    var index=parseInt(id,10)
    var lista_alertas=JSON.parse(localStorage.getItem("json_gestion_alertas")|| "[]")
    lista_alertas.splice(index, 1)
    localStorage.setItem("json_gestion_alertas",JSON.stringify(lista_alertas))
    window.location.href="gestionalertas.html"
}
var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var categorias_ingreso=["trabajo","inversiones","prestamos"]
var categorias_egreso=["alimentación","transporte","entretenimiento"]
window.onload=function () {
    default_tipos() 
        colocar_nombre()
    read_tipo_ingreso_egreso()
       
}
function default_tipos() {
    var defaults=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")|| "[]")
       var default1= new tipo_de_ingreso_egreso("a100","cena lujosa","alimentación","descripción","egreso")
       var default2= new tipo_de_ingreso_egreso("a101","pago bus","transporte","descripción","egreso")
       var default3= new tipo_de_ingreso_egreso("a102","pago Netflix","entretenimiento","descripción","egreso")

       var default4= new tipo_de_ingreso_egreso("b100","Sueldo","trabajo","descripción","ingreso")
       var default5= new tipo_de_ingreso_egreso("b101","Acciones de cecar","inversiones","descripción","ingreso")
       var default6= new tipo_de_ingreso_egreso("b102","Prestamo de banco","prestamos","descripción","ingreso")
       if (defaults.length==0) {
        defaults.push(default1)
        defaults.push(default2)
        defaults.push(default3)
        defaults.push(default4)
        defaults.push(default5)
        defaults.push(default6)
        localStorage.setItem("json_tipo_ingreso_egreso",JSON.stringify(defaults))
       }
        
}

function colocar_nombre() {
    document.querySelector("#nombre_usuario_inside_div_superior_derecha_inside_div_superior").innerHTML=usuario.nombre+" "+usuario.apellido
}
function read_tipo_ingreso_egreso() {
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")|| "[]")
     if (tipo.length==0) {
         var vacio=document.createElement("div")
         vacio.setAttribute("id","vacio")
         var contenedor_general=document.getElementById("contenedor_general")
         vacio.appendChild(document.createTextNode("No hay tipos registrados"))
         contenedor_general.appendChild(vacio)
     }else{
         var tabla=document.getElementById("tabla_gestion_ingreso_egreso")
         for (let index = 0; index < tipo.length; index++) {
            
             var fila=tabla.insertRow(-1)
             var columna=fila.insertCell(0);
             var columna1=fila.insertCell(1)
             columna1.appendChild(document.createTextNode(tipo[index].codigo))

             var columna2=fila.insertCell(2)
             columna2.appendChild(document.createTextNode(tipo[index].nombre_tipo))
            
             var columna3=fila.insertCell(3)
             columna3.appendChild(document.createTextNode(tipo[index].descripcion))

            var columna4=fila.insertCell(4)
             columna4.appendChild(document.createTextNode(tipo[index].tipo))

         var columna5=fila.insertCell(5)
             columna5.appendChild(document.createTextNode(tipo[index].categoria))

             var columna7=fila.insertCell(6)
             var botonborrar=document.createElement("button")
             botonborrar.appendChild(document.createTextNode("borrar"))
             botonborrar.setAttribute("id",tipo[index].codigo)
             console.log(botonborrar.getAttribute("id"))
             botonborrar.setAttribute("onclick","borrar(getAttribute('id'))")
             columna7.appendChild(botonborrar)

         }   
     }
}
function abrir_modal_actualizar() {
    var primer__codigo;
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.showModal();
    var codigo_a_seleccionar=document.getElementById("codigo_a_seleccionar")
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
  
    
    if ( tipo.length==0) {
        
    }else{
        for (let index = 0; index < tipo.length; index++) {
                var option=document.createElement("option")
                option.setAttribute("value",tipo[index].codigo)
                option.appendChild(document.createTextNode(tipo[index].codigo))
                codigo_a_seleccionar.appendChild(option)
            
        
        }
        for (let index = 0; index < tipo.length; index++) {
                
            primer__codigo=index
                break;  
        }

        llenar_datos_actualizacion(primer__codigo)
        
    }
}
function actualizar_tipo() {
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
    var codigo_a_seleccionar=document.getElementById("codigo_a_seleccionar")

    var input_nombre_actualizar=document.getElementById("input_nombre_actualizar")
    var input_categoria_actualizar=document.getElementById("input_categoria_actualizar")
    var input_tipo_actualizar=document.getElementById("input_tipo_actualizar")
    var input_descripcion_actualizar=document.getElementById("input_descripcion_actualizar")
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    if (input_nombre_actualizar.value=="") {
        alert("escriba el nombre del tipo")
    }else{
        
        for (let i = 0; i < tipo.length; i++) {
            if (codigo_a_seleccionar.value==tipo[i].codigo) {
                for (let index = 0; index < lista_transacciones.length; index++) {
                    if (lista_transacciones[index].tipo_ingreso_egreso==tipo[i].nombre_tipo) {
                        lista_transacciones[index].tipo_ingreso_egreso=input_nombre_actualizar.value
                    }
                    
                }
                localStorage.setItem("json_gestion_transacciones",JSON.stringify(lista_transacciones))
                tipo[i].nombre_tipo=input_nombre_actualizar.value
                tipo[i].categoria=input_categoria_actualizar.value
                tipo[i].descripcion=input_descripcion_actualizar.value
    
                tipo[i].tipo=input_tipo_actualizar.value
             break;   
            }
            
        }
        localStorage.setItem("json_tipo_ingreso_egreso",JSON.stringify(tipo))
        cerrar_modal_actualizar()
        window.location.href="menuadministrador.html"
    }
    

}
function cambiar_tipo_actualizar() {
    let indice;
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
    var codigo_a_seleccionar=document.getElementById("codigo_a_seleccionar")
    for (let index = 0; index < tipo.length; index++) {
        if (codigo_a_seleccionar.value==tipo[index].codigo) {
         indice=index
         break;   
        }
        
    }
    
    var input_nombre_actualizar=document.getElementById("input_nombre_actualizar")
    input_nombre_actualizar.value=tipo[indice].nombre_tipo

     

     var input_tipo_actualizar=document.getElementById("input_tipo_actualizar")
     input_tipo_actualizar.value=tipo[indice].tipo
     cambiar_categorias_actualizar()
     var input_categoria_actualizar=document.getElementById("input_categoria_actualizar")
     input_categoria_actualizar.value=tipo[indice].categoria

    var input_descripcion_actualizar=document.getElementById("input_descripcion_actualizar")
    input_descripcion_actualizar.value=tipo[indice].descripcion 
}
function llenar_datos_actualizacion(index) {
    
    var parseindex=parseInt(index,10)
    console.log(parseindex)
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
var numero=tipo[parseindex].codigo
console.log(tipo[parseindex].codigo)
    var codigo_a_seleccionar=document.getElementById("codigo_a_seleccionar")
    codigo_a_seleccionar.value=tipo[parseindex].codigo
    
    var input_nombre_actualizar=document.getElementById("input_nombre_actualizar")
    input_nombre_actualizar.value=tipo[parseindex].nombre_tipo

     

     var input_tipo_actualizar=document.getElementById("input_tipo_actualizar")
     input_tipo_actualizar.value=tipo[parseindex].tipo
     cambiar_categorias_actualizar()
     var input_categoria_actualizar=document.getElementById("input_categoria_actualizar")
     input_categoria_actualizar.value=tipo[parseindex].categoria

    var input_descripcion_actualizar=document.getElementById("input_descripcion_actualizar")
    input_descripcion_actualizar.value=tipo[parseindex].descripcion   

}
function borrar(codigo) {
    var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")|| "[]")
    console.log(codigo)
    let tipo_con_transaccion
    for (let index = 0; index < tipo.length; index++) {
        if (tipo[index].codigo==codigo ) {
            for (let i = 0; i < lista_transacciones.length; i++) {
                console.log(lista_transacciones[i].tipo_ingreso_egreso)
                console.log(tipo[index].nombre_tipo)
                if (lista_transacciones[i].tipo_ingreso_egreso==tipo[index].nombre_tipo) {
                    tipo_con_transaccion=true
                }
                
    
            }
            if (tipo_con_transaccion) {
                alert("no se puede eliminar porque hay transacciones usando dicho tipo")
            } else {
                tipo.splice(index, 1)
            }
            
            break;
        }
    }
    localStorage.setItem("json_tipo_ingreso_egreso",JSON.stringify(tipo))
    window.location.href="menuadministrador.html"
}
function cerrar_modal_actualizar() {
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close();
}
function cambiar_categorias_actualizar() {
    var input_tipo=document.getElementById("input_tipo_actualizar")
    var input_categoria=document.getElementById("input_categoria_actualizar")
    var cantidadchilds=input_categoria.childElementCount
    if (!(cantidadchilds==1)) {
        
        for (let index = 0; index < cantidadchilds-1; index++) {
            //se cuenta un child menos debido a que se esta contando tambien el ninguno y ese debe permanecer
            var opcion=document.getElementById(index)
            input_categoria.removeChild(opcion)
        }
    }
    if (input_tipo.value=="ingreso") {
        for (let index = 0; index < categorias_ingreso.length; index++) {
            
            var opcion=document.createElement("option")
            opcion.appendChild(document.createTextNode(categorias_ingreso[index]))
            opcion.setAttribute("value",categorias_ingreso[index])
            opcion.setAttribute("id",index)
            input_categoria.appendChild(opcion)
        }
    }else{
        for (let index = 0; index < categorias_egreso.length; index++) {
            var opcion=document.createElement("option")
            opcion.appendChild(document.createTextNode(categorias_egreso[index]))
            opcion.setAttribute("value",categorias_egreso[index])
            opcion.setAttribute("id",index)
            input_categoria.appendChild(opcion)
        }
    }
}
function cambiar_categorias() {
    var input_tipo=document.getElementById("input_tipo")
    var input_categoria=document.getElementById("input_categoria")
    var cantidadchilds=input_categoria.childElementCount
    if (!(cantidadchilds==1)) {
        
        for (let index = 0; index < cantidadchilds-1; index++) {
            //se cuenta un child menos debido a que se esta contando tambien el ninguno y ese debe permanecer
            var opcion=document.getElementById(index)
            input_categoria.removeChild(opcion)
        }
    }
    if (input_tipo.value=="ingreso") {
        for (let index = 0; index < categorias_ingreso.length; index++) {
            
            var opcion=document.createElement("option")
            opcion.appendChild(document.createTextNode(categorias_ingreso[index]))
            opcion.setAttribute("value",categorias_ingreso[index])
            opcion.setAttribute("id",index)
            input_categoria.appendChild(opcion)
        }
    }else{
        for (let index = 0; index < categorias_egreso.length; index++) {
            var opcion=document.createElement("option")
            opcion.appendChild(document.createTextNode(categorias_egreso[index]))
            opcion.setAttribute("value",categorias_egreso[index])
            opcion.setAttribute("id",index)
            input_categoria.appendChild(opcion)
        }
    }
}
function abrir_modal_crear() {
    var modal_crear=document.getElementById("modal_crear")
    modal_crear.showModal();
    cambiar_categorias()
}
function cerrar_modal_crear() {
    var modal_crear=document.getElementById("modal_crear")
    modal_crear.close();
    var input_descripcion=document.getElementById("input_descripcion")
    var input_nombre=document.getElementById("input_nombre")
    var input_codigo=document.getElementById("input_codigo")
    input_descripcion.value=""
    input_nombre.value=""
    input_codigo.value=""
}
function crear_tipo() {
    var tipo=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")|| "[]")
    var input_codigo=document.getElementById("input_codigo")
    var input_nombre=document.getElementById("input_nombre")
    var input_tipo=document.getElementById("input_tipo")
    var input_categoria=document.getElementById("input_categoria")
    var input_descripcion=document.getElementById("input_descripcion")
    let existente=false
    if (input_codigo.value==""||input_nombre.value=="") {
        alert("escriba el codigo y/o el nombre del tipo")
    }else{
        if (tipo.length<1) {
        
        }else{
            for (let index = 0; index < tipo.length; index++) {
                if (tipo[index].codigo==input_codigo.value||tipo[index].nombre_tipo==input_nombre.value) {
                    existente=true
                }
            
            }
        }
        if (existente) {
            alert("codigo o nombre tipo ya existente")
        }else{
            var creartipo=new tipo_de_ingreso_egreso(input_codigo.value,input_nombre.value,input_categoria.value,input_descripcion.value,input_tipo.value)
            tipo.push(creartipo)
            localStorage.setItem("json_tipo_ingreso_egreso",JSON.stringify(tipo))
            window.location.href="menuadministrador.html"
        }
    }
    
    
}
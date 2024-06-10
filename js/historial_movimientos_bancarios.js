var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")

window.onload=function () {
    colocar_nombre()
    colocar_transacciones()
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
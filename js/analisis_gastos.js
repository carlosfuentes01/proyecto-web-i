var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
var tipos_usados=[]
var valores_tipos_usados=[]
var colores=[]
var lista_transacciones=JSON.parse(localStorage.getItem("json_gestion_transacciones")||"[]")
    var tipos=JSON.parse(localStorage.getItem("json_tipo_ingreso_egreso")||"[]")
    var lista_cuentas_bancarias=JSON.parse(localStorage.getItem("json_gestion_cuentas_bancarias")||"[]")
    var egresos_usuario;
window.onload=function () {
    otros()
    datos_grafica()
    alerta()
    colocar_nombre()
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
function otros(){
    
    var egresos_totales=document.getElementById("egresos_totales")
    var saldo_restante=document.getElementById("saldo_restante")
    let saldo_total=0;
    for (let index = 0; index < lista_cuentas_bancarias.length; index++) {
        if (usuario.email==lista_cuentas_bancarias[index].email) {
            saldo_total+=parseInt(lista_cuentas_bancarias[index].saldo,10)
        }
        
    }
    let egresos=0
    saldo_restante.value=saldo_total
    for (let index = 0; index < lista_transacciones.length; index++) {
        if (usuario.email==lista_transacciones[index].email) {
            if (lista_transacciones[index].tipo_transaccion=="egreso") {
                egresos+=parseInt(lista_transacciones[index].valor_transaccion,10)
                
            }
            
        }
        
    }
    egresos_totales.value=egresos
    egresos_usuario=egresos

    
}
function datos_grafica() {
   
   var valor=0
   var hay_valores=false
   if (!(lista_transacciones==0)) {
    for (let index = 0; index < lista_transacciones.length; index++) {
        if (usuario.email==lista_transacciones[index].email) {
            hay_valores=true
            break;
        }
    }
   }
   if (hay_valores==false) {
        var contenedor_imagen=document.getElementById("contenedor_imagen")
        contenedor_imagen.appendChild(document.createTextNode("no hay transacciones"))
   }else{
         
    for (let index = 0; index < lista_transacciones.length; index++) {
        if (usuario.email==lista_transacciones[index].email&&lista_transacciones[index].tipo_transaccion=="egreso") {
            if (tipos_usados.length==0) {
                console.log(lista_transacciones[index].tipo_ingreso_egreso)
                console.log(lista_transacciones[index].valor_transaccion)
                tipos_usados.push(lista_transacciones[index].tipo_ingreso_egreso)
                valores_tipos_usados.push(parseInt(lista_transacciones[index].valor_transaccion,10))
                var color1 = Math.floor(Math.random() * 252) 
            var color2 = Math.floor(Math.random() * 252) 
            var color3 = Math.floor(Math.random() * 252) 
         var color="rgb(" + color1 + "," + color2 + "," + color3 + "0,5)"
         colores.push(color)
            }else{
                var igual=false;
                for (let i = 0; i < tipos_usados.length; i++) {
                    if (tipos_usados[i]==lista_transacciones[index].tipo_ingreso_egreso) {
                        igual=true
                        valores_tipos_usados[i]=parseInt(valores_tipos_usados[i],10)+parseInt(lista_transacciones[index].valor_transaccion,10)
                    }
                }
                if (igual==false) {
                    tipos_usados.push(lista_transacciones[index].tipo_ingreso_egreso)
                    valores_tipos_usados.push(lista_transacciones[index].valor_transaccion)
                    var color1 = Math.floor(Math.random() * 252) 
            var color2 = Math.floor(Math.random() * 252) 
            var color3 = Math.floor(Math.random() * 252) 
         var color="rgb(" + color1 + "," + color2 + "," + color3 + "0,5)"
         colores.push(color)
                }
            }
        }
        
       }
       console.log(colores)
       var todos_valores=0
       for (let index = 0; index < valores_tipos_usados.length; index++) {
        todos_valores=parseInt(valores_tipos_usados[index],10)+todos_valores
        
       }
       var porcentaje=0
       for (let index = 0; index < valores_tipos_usados.length; index++) {
        porcentaje=100*valores_tipos_usados[index]/todos_valores
        valores_tipos_usados[index]=porcentaje
        console.log(valores_tipos_usados[index])
       }
       grafica()
   }
   
           
        
        
        
    
    
}
function colocar_nombre() {
    document.querySelector("#nombre_usuario_inside_div_superior_derecha_inside_div_superior").innerHTML=usuario.nombre+" "+usuario.apellido
}

function grafica() {
   
    var ctx= document.getElementById("myChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"pie",
            data:{
                labels:[]=tipos_usados,
                datasets:[{
                        label:'Num datos',
                        data:[]=valores_tipos_usados,
                        backgroundColor:[]=colores
                }]
            },
            options:{
                maintainAspectRatio:false,
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
  
        });

}
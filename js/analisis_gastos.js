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
    
    colocar_nombre()
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
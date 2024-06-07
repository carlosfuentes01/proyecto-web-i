var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
window.onload=function () {
    colocar_nombre()
}
function colocar_nombre() {
    
    document.querySelector("#nombre_usuario_inside_div_superior_derecha_inside_div_superior").innerHTML=usuario.nombre+" "+usuario.apellido
}

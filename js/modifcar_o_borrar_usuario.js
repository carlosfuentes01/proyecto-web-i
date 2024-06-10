
var usuario=JSON.parse(localStorage.getItem("num_cuenta_actual"))
window.onload=function () {
    read_usuario()
}
function read_usuario() {
    var id_Input_Name=document.getElementById("id_Input_Name")
    var id_Input_Apellido=document.getElementById("id_Input_Apellido")
    var id_Input_NºDocumento=document.getElementById("id_Input_NºDocumento")
    var id_Input_Password=document.getElementById("id_Input_Password")
    var id_Input_Email=document.getElementById("id_Input_Email")
    var id_tipo_Input_Documento=document.getElementById("id_tipo_Input_Documento")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
var indice;
    for (let index = 0; index < lista_usuarios.length; index++) {
        if (usuario.email==lista_usuarios[index].email) {
            indice=index
        }
        
    }
    id_Input_Name.value=lista_usuarios[indice].nombre
    id_Input_Email.value=lista_usuarios[indice].email
    id_Input_Apellido.value=lista_usuarios[indice].apellido
    id_Input_NºDocumento.value=lista_usuarios[indice].numero_documento

    id_Input_Password.value=lista_usuarios[indice].password
    id_tipo_Input_Documento.value=lista_usuarios[indice].tipo_documento
    
    
}
function abrir_modal_actualizar() {
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.showModal(); 
    var id_Input_Name=document.getElementById("id_Input_Name-modal_actualizar")
    var id_Input_Apellido=document.getElementById("id_Input_Apellido-modal_actualizar")
    var id_Input_NºDocumento=document.getElementById("id_Input_NºDocumento-modal_actualizar")
    var id_Input_Password=document.getElementById("id_Input_Password-modal_actualizar")

    var id_tipo_Input_Documento=document.getElementById("id_tipo_Input_Documento-modal_actualizar")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
var indice;
    for (let index = 0; index < lista_usuarios.length; index++) {
        if (usuario.email==lista_usuarios[index].email) {
            indice=index
        }
        
    }
    id_Input_Name.value=lista_usuarios[indice].nombre

    id_Input_Apellido.value=lista_usuarios[indice].apellido
    id_Input_NºDocumento.value=lista_usuarios[indice].numero_documento

    id_Input_Password.value=lista_usuarios[indice].password
    id_tipo_Input_Documento.value=lista_usuarios[indice].tipo_documento
}
function actualizar() {
    var id_Input_Name=document.getElementById("id_Input_Name-modal_actualizar")
    var id_Input_Apellido=document.getElementById("id_Input_Apellido-modal_actualizar")
    var id_Input_NºDocumento=document.getElementById("id_Input_NºDocumento-modal_actualizar")
    var id_Input_Password=document.getElementById("id_Input_Password-modal_actualizar")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
    var indice;
    for (let index = 0; index < lista_usuarios.length; index++) {
        if (usuario.email==lista_usuarios[index].email) {
            indice=index
        }
        
    }
    lista_usuarios[indice].nombre=id_Input_Name.value
    lista_usuarios[indice].apellido=id_Input_Apellido.value
    lista_usuarios[indice].numero_documento=id_Input_NºDocumento.value
    lista_usuarios[indice].password=id_Input_Password.value
    lista_usuarios[indice].tipo_documento=id_tipo_Input_Documento.value
    localStorage.setItem("json_usuario",JSON.stringify(lista_usuarios))
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close(); 
    window.location.href="modificar_o_borrar_usuario.html"
}
function borrar() {
    console.log("hola")
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
     for (let index = 0; index < lista_usuarios.length; index++) {
        if (lista_usuarios[index].email==usuario.email) {
            lista_usuarios.splice(index,1)
            break;
        }
        
     }
     localStorage.setItem("json_usuario",JSON.stringify(lista_usuarios))
     alert("Gracias por haber usado Cetus")
     window.location.href="../index.html"
}
function cerrar_borrar() {
    var modal_borrar=document.getElementById("modal_borrar")
    modal_borrar.close(); 
}
function cerrar_actualizar() {
    var modal_actualizar=document.getElementById("modal_actualizar")
    modal_actualizar.close(); 
}
function abrir_modal_borrar() {
    var modal_borrar=document.getElementById("modal_borrar")
    modal_borrar.showModal(); 
}
function ir_principal() {
    window.location.href="paginaconsejos.html"
}
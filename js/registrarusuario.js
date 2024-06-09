
function proceso_registrar() {

  let usuario_existente=false
     email = document.getElementById("id_Input_Email").value;
     nombre = document.getElementById("id_Input_Name").value;
     apellido=document.getElementById("id_Input_Apellido").value
     numero_documento=document.getElementById("id_Input_NºDocumento").value
      password=document.getElementById("id_Input_Password").value
        tipo_documento=document.getElementById("id_tipo_Input_Documento").value
        var tipo="";
        if (tipo_documento==1) {
          tipo="Tarjeta identidad"
        }if (tipo_documento==2) {
          tipo="Cédula"
        } else {
          tipo="Cédula extranjera"
        }
console.log(tipo+"tipo documento")
if (email==""||nombre==""||apellido==""||numero_documento==""||password=="") {
  
      alert("Llene los espacios vacios")

}else{
  if (limite(nombre,20) && limite(apellido,20)&&limite(email,64)&&limite(password,30)&&limite(numero_documento,12)) {
    var lista_usuarios=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
  for (let i = 0; i < lista_usuarios.length; i++) {
      if (lista_usuarios[i].email == email) {
        usuario_existente=true
      }
  }
  if (usuario_existente) {
    alert("Usuario ya existente")
  }else{
    var crearusuarios=new listausuario(email,nombre,apellido,numero_documento,password,tipo,"false")
   lista_usuarios.push(crearusuarios)
   localStorage.setItem("json_usuario",JSON.stringify(lista_usuarios))
   alert("Usuario creado")
   window.location.href="../html/ingresarusuario.html"
  }
  }else{
    alert("hay valores demasiado grandes")
  }
  
}
      
}
function limite(input,limite) {
  console.log(input.length+"entrada")
  console.log(limite+"limite")
  let limite_not_break=true
  if (input.length>limite) {
    limite_not_break=false
  }
  return limite_not_break
}

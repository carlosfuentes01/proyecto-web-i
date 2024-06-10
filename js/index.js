window.onload=function(){

    var admin=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
       var crearadmin= new listausuario ("admin2","Simon","Bolivar",  100000 ,"contraseña_admin","Cédula","true")
       if (admin.length==0) {
          admin.push(crearadmin)
          localStorage.setItem("json_usuario",JSON.stringify(admin))
      }
      console.log(admin)
}
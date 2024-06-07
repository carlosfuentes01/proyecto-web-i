window.onload=function(){
    let admincreado=false
    var admin=JSON.parse(localStorage.getItem("json_usuario")|| "[]")
       var crearadmin= new listausuarios("admin2","Simon","Bolivar",  100000 ,"contraseña_admin","Cédula","true")
       for (let index = 0; index < admin.length; index++) {
           if (admin[index].email=="admin2") {
               admincreado=true
           }
       }
       if ((!admincreado)) {
        
          admin.push(crearadmin)
          localStorage.setItem("json_usuario",JSON.stringify(admin))
      }
      console.log(admin)
}
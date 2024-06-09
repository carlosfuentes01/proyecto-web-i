import {fecha,precio,tipo } from "./hola2.js";
var contar=0;
    closeModal.addEventListener("click", holap)
        
   
    console.log(contar)

function holap(params) {
   
    const contenedor = document.querySelector(".contenedor_padre")
    console.log(fecha)
    console.log(tipo)
    console.log(precio)
    var fechadia = new Date()
    var dia = fechadia.getDay()
    console.log(dia)
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
    
    var D_S = document.createElement("h2")
    D_S.textContent = dia
    var hola = document.createElement("div")
    hola.classList.add("Contenedor")
   

    if (contar==0) {
        contenedor.appendChild(D_S)
        console.log(D_S)
        contenedor.appendChild(hola)
       

        var fechadiv = document.createElement("div")
        var fechap = document.createElement("p")
        fechap.textContent = fecha
        console.log(fechap)
        var preciodiv = document.createElement("div")
        var preciop = document.createElement("p")
        preciop.textContent = precio
    
        var categoriap = document.createElement("p")
        categoriap.textContent=categoria
        categoriap2.textContent=categoria2

        preciodiv.classList.add("Precio")
        fechadiv.classList.add("Fecha")
    
        hola.appendChild(fechadiv)
        fechadiv.appendChild(fechap)
        hola.appendChild(categoriap)
        
        hola.appendChild(preciodiv)
        preciodiv.appendChild(preciop)
        
    }
    
    else if(contar>1){
        contenedor.appendChild(hola)
        var fechadiv = document.createElement("div")
        var fechap = document.createElement("p")
        fechap.textContent = fecha
    
        var preciodiv = document.createElement("div")
        var preciop = document.createElement("p")
        preciop.textContent = precio
    
        var categoriap = document.createElement("p")
        preciodiv.classList.add("Precio")
        fechadiv.classList.add("Fecha")
    
        hola.appendChild(fechadiv)
        fechadiv.appendChild(fechap)
    
        hola.appendChild(categoriap)
        hola.appendChild(preciodiv)
        preciodiv.appendChild(preciop)
        
    }
    contar=contar+1
  
}
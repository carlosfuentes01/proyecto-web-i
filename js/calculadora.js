function resolver() {
    var seleccion = document.getElementById("id1").value;
    var N1 = parseInt(document.getElementById("numero1").value);
    var N2 = parseInt(document.getElementById("numero2").value);
    var Resultado;
    if (seleccion == 1) {
        Resultado = N1 + N2;
        document.querySelector("#mostrad").innerHTML= "El resultado de la suma es " +Resultado;
        
       
       

    }
    else if (seleccion == 2) {
        if (N1 > N2) {
            Resultado = N1 - N2;
            document.querySelector("#mostrad").innerHTML= "El resultado de la resta eas " +Resultado;
        }
        else {
            Resultado = N2 - N1;
            document.querySelector("#mostrad").innerHTML= "El resultado de la resta es " +Resultado;

        }

    }
    else{
        Resultado=N1*N2;
        document.querySelector("#mostrad").innerHTML= "El resultado de la multiplicacion es " +Resultado;
        
    }

}
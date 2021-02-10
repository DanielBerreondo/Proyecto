// cotizador automatico
//noprotect
var base = 2000;
var restart;
var parcial_conyuge; // la variable nos sirve para calcular el recargo segun la edad del conyuge
var parcial_hijos; // la variable nos sirve para calcular el recarglo segun la cantidad de hijos
var parcial_propiedades;
var parcial_sueldo;
var recargo_sueldo;
var total;

do{
var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
var casado = prompt("Es casado/a?");
if (casado == "si"){
  var edad_conyuge = prompt("Ingrese la edad de su conyuge: ");
  if (edad_conyuge >= 18 && edad_conyuge < 25 ){
    parcial_conyuge = base * 0.10;
  } else if(edad_conyuge >= 25 && edad_conyuge < 50){
    parcial_conyuge = base * 0.2;
    } else if(edad_conyuge >= 50){
    parcial_conyuge = base * 0.3;
  }
} else if(casado == "no"){
    console.log("No tiene recargo de casado"); 
  parcial_conyuge = 0;
}
  var hijos = prompt("Tiene hijos?");
if (hijos == "si"){
  var cantidad_hijos = prompt("Cuantos hijos tiene?");
  parcial_hijos = (base * 0.2) * cantidad_hijos;
}else if (hijos == "no"){
  console.log("No tiene recargo de hijos");
  parcial_hijos = 0;
}
  var propiedades = prompt("Tiene propiedades?");
  if(propiedades == "si"){
    var cantidad_propiedades = prompt("Cuanto valen sus propiedades?");
    parcial_propiedades = cantidad_propiedades * 0.35;
  }else if(propiedades == "no"){
    console.log("No tiene recargo de propiedades");
    parcial_propiedades = 0;
  }
  
  var sueldo = prompt("Tiene salario?");
    if(sueldo == "si"){
      var cantidad_sueldo = prompt("De cuanto es su salario?");
      parcial_sueldo = cantidad_sueldo * 0.05;
    } else if(sueldo == "no"){
      console.log("No tiene recargo de salario");
      parcial_sueldo = 0;
    }

  
total = base + parcial_conyuge + parcial_hijos + parcial_propiedades + parcial_sueldo;
console.log("Su total es de: Q"+total);
  
  restart = prompt("Desea agregar otra cotizacion?");
}while(restart != "no");

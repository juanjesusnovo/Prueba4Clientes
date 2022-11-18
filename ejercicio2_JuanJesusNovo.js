function isLeapYear(n1, n2){

    //Con el math.trunc() lo q hacemos es eliminar los posibles decimales de los numeros recibidos para tener numeros enteros
    Math.trunc(n1);
    Math.trunc(n2);
    //Con los max y min comprobamos que numero es mayor para establecer el rango de números
    let max = Math.max(n1,n2);
    let min = Math.min(n1,n2);
    let bisiestos = [];

    //Con este if comprobamos que los valores introducidos son números, si no lo son, muestra el mensaje
    if(typeof(n1) != "number" || typeof(n2) != "number"){
        return "Los valores introducidos no son válidos";
    }
    else{
        //Con este if comprobamos que el primer valor es mayor que 2001 y que el segundo sea menor de 2500
        if(min < 2001 || max > 2500){
            return "Los valores introducidos no son válidos";
        }
        else{
            for(let x = min; x <=max ; x++){
                if(x % 100 == 0 && x % 4 == 0){
                    bisiestos.push(x);
                }
                else if(x % 4 == 0){
                    bisiestos.push(x);
                }
            }
            return bisiestos;
        }
    }
}

console.log( isLeapYear(2020, 2001));
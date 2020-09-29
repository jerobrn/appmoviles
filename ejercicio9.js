//9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen

    function even(numero){
            if(numero % 2==1){
                return false;
            }else{
                return true;
            }
        }


    function rechazar(func,array){
        console.log(array.filter(element => !even(element)));
    }

    rechazar(even,[7,9,87,42]);



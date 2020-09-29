//8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen


    //Función even
    function even(numero){
        if(numero % 2==1){
            return false;
        }else{
            return true;
        }
    }

    //función cuantosCumplen()
    function cuantosCumplen(func,array){
        console.log(array.filter(element => func(element)).length);
    }

    //Test
    cuantosCumplen(even,[7,9,25,42]); 



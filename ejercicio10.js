//10-  Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento
   
    function contiene(numero, array){
        console.log(array.some((element) => element==numero));
    }

    contiene(8,[7,9,87,42]);
  


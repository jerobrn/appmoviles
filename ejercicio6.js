//6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.
    
    function quienesAprobaron(arrays){
        console.log(
            arrays.filter(array => array.every(val => val>4)));
    }


    quienesAprobaron( [[6,7,8],[1,1,1],[10,10,10]]);
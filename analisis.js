//Helpers
const salariosMexico = mexico.map(
    function (persona) {
        return persona.salary;
    }
);
const salariosMexicoSort = salariosMexico.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

function mediana(lista) {
    const longitudLista = lista.length;
    const puntoMedio = longitudLista/2;
    if ((longitudLista % 2) == 1){
        return lista[puntoMedio - 0.5];
    } else {
        return (lista[puntoMedio] + lista[puntoMedio-1]) /2;
    }
};

function top10(listaOrdenada) {
    const longitudLista = listaOrdenada.length;
    const posicionTop10 = Math.round(longitudLista * 0.1);
    const listaTop10 = listaOrdenada.splice(longitudLista - posicionTop10, posicionTop10);
    return listaTop10;
};

//operadoras

const medianaGeneral = mediana(salariosMexicoSort);

const medianaTop10 = mediana(top10(salariosMexicoSort));
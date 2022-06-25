import { useState } from "react"

export const useCounter = ( valorInicial = 0 ) => {

    const [ counter, setCounter ] = useState( valorInicial )

    const incremento = ( valor = 1 ) => {
        setCounter( counter + valor );
    };

    const setValor = ( valor ) => {
        setCounter ( valor );
    } 

    const reinicio = () => {
        setCounter( valorInicial )
    };

    const decremento = ( valor = 1 ) => {
       ( counter > 0 ) ?  setCounter ( counter - valor ) : null
    };

    return {
        counter, incremento, decremento, reinicio, setValor
    }
}


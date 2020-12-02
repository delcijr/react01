import React, { useState } from 'react';
import Sub from './Sub';

export default (props) => {
    const [texto, setTexto] = useState('Valor')
    const [num, setNUm] = useState(0)

    function qdoClicar (valorGerado, texto) {
        setNUm(valorGerado)
        setTexto(texto)
    }
    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub aoClicar={qdoClicar}></Sub> 
        </div>  
    );
};
import React from 'react'

export default (props) => {

    // Modelo 2
    function acao() {
        props.aoClicar(Math.random(), 'Gerado');
    }
    return (   
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    );
};

{/* Modelo 1
    
    export default (props) => {
    return (   
        <div>
            <button onClick={() => {
                props.aoClicar(Math.random())
            }}>Alterar</button>
        </div>
    );
}; */}
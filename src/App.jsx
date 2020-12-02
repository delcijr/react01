import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalIf'
import Card from './components/layout/Card'

export default props => (
    <div className="App">
        <Card titulo="#06 - Condicional com If">
            <CondicionalIf numero={10}></CondicionalIf>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" /> 
        </Card>
       <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
)
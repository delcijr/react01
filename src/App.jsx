import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Card from './components/layout/Card'

export default props => (
    <div className="App">
        <Card titulo="#08 - Comunicação indireta" color="#160A47">
            <Super></Super>
        </Card>
        <Card titulo="#07 - Comunicação direta" color="#A3D39C">
            <Pai sobrenome="Freitas"></Pai>
        </Card>
        <Card titulo="#06 - Condicional com If" color="#FA6900">
            <CondicionalIf numero={10}></CondicionalIf>
        </Card>
        <Card titulo="#05 - Condicional" color="#E94C6F">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição" color="#28ABE3">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos" color="#588C73 ">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro" color ="#D0C91F">
            <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" /> 
        </Card>
       <Card titulo="#01 - Primeiro Componente" color="#7F7F7F">
            <Primeiro />
        </Card>
    </div>
)
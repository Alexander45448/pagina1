import React from 'react'

import Bighero3 from './Bighero3'
import Card3 from './Card3'

var items = []

class ThirdPage extends React.Component {
   render(){
    return(
        <React.Fragment>
            <Bighero3/>
            <div className="container-fluid">
                <div className="row">
                <Card3 title ="Chevrolet Camaro RS/SS (1967)"  text="Chevrolet quiso darle batalla al exitoso Ford Mustang, y así surgió en 1967 el modelo Camaro. Como todos los demás Chevys, también éste debía comenzar con la letra C.Por eso se le cambió en el último minuto el nombre, que originalmente iba a ser Panther. El Camaro fascinó al público sobre todo debido a su amplio sistema de seguridad, lo cual en su época era todavía un lujo. "/>
                <img src ="https://www.dw.com/image/19159788_303.jpg" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                <Card3 title ="Ford Shelby G T 350 Mustang (1965)" text="Si bien el Mustang no tiene en Europa el mismo estatus que en Estados Unidos, también aquí posee admiradores. Al fin y al cabo, cada nuevo modelo ha sido más grande y ostentoso que el anterior. El auto, que originalmente llevaba el nombre de su diseñador, Carroll Shelby, es muy apreciado sobre todo por los aficionados a la mecánica."/>
                <img src ="https://www.dw.com/image/19159787_303.jpg" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                <Card3 title ="Aston Martin DB5 (1964)" text="Su nombre es Martin. Aston Martin. Y está tan ligado a James Bond como los martinis y las mujeres hermosas. Del Aston Martin DB5 se fabricaron solo poco más de 1.000 unidades. El auto es especialmente codiciado por los coleccionistas, no solo por su aparición en Goldfinger, en 1964. Claro que cuesta un dineral." />
                <img src ="https://www.dw.com/image/19159786_303.jpg" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                </div>

            </div>
        </React.Fragment>

    )
   }
   
   componentWillMount(){
    items = []
    for(let i = 0; i < 3; i++)
    items.push(<Card3/>)
}
}

export default ThirdPage;
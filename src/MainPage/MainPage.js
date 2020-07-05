import React from 'react'

import Bighero from './Bighero'
import Card from './Card'


var items = []

class MainPage extends React.Component {
   render(){
    return(
        <React.Fragment>
            <Bighero/>
            <div className="container-fluid">
                <div className="row">
                <Card title ="Aston Martin Valkyrie"  text="Cuenta con un motor 6.5 V12 atmosférico único, una mecánica capaz de alcanzar los 1.000 CV de potencia máxima a 10.500 rpm y 740 Nm de par a 7.000 rpm. El techo de giro de este propulsor son 11.100 revoluciones por minuto, cifras imposibles de ver en un coche de calle y que demuestran las magnitudes en las que se mueve el Valkyrie como coche ideado bajo estrategias más propias de competición."/>
                <img src ="https://media.revistagq.com/photos/5e33e3b87c484c00080a1df6/master/w_828%2cc_limit/Aston-Martin-Valkyrie-7.jpg"  alt="ASTON" width="500" HSPACE="10" VSPACE="10"> 
                </img>
                <Card title ="BMW M8" text="Disponible en dos variantes, el BMW M850i xDrive Coupé ofrece una síntesis de comodidad, rendimiento y eficiencia. El BMW M8 Coupé Competition con sistema M xDrive es una versión aún más potente y exclusiva de este deportivo de elevadas prestaciones. El diseño avanzado del nuevo BMW M8 Coupé Competition destaca por el radical dinamismo de sus contornos, que resultan a la vez excepcionalmente elegantes. "/>
                <img src ="https://media.revistagq.com/photos/5e33e4807c484c00080a1e02/master/w_828%2cc_limit/bmw-m8competition-coupe-inspire-sp-desktop_v2.jpg" width="500" alt="BMW M8" HSPACE="10" VSPACE="10"> 
                </img>
                <Card title ="Jaguar F-Type" text="Uno de los jaguares más bonitos de la era moderna cuenta con numerosas opciones de configuración: coupé o techo blando, tracción trasera o en las cuatro ruedas, manual o automático, y con cinco niveles de potencia diferentes de tres motores diferentes para elegir, que van desde el 300 CV cuatro cilindros con tracción trasera a los 575 CV del R V8 sobrealimentado. " 
                />
                <img src ="https://media.revistagq.com/photos/5e33e8a894b9d30008bf7c60/master/w_828%2cc_limit/Hero-Jag_F-TYPE_R_21MY_Velocity_Blue_Reveal.jpg" width="500" alt="JAGUAR" HSPACE="10" VSPACE="10"> 
                </img>
                </div>

            </div>
        </React.Fragment>

    )
   }

   componentWillMount(){
       items = []
       for(let i = 0; i < 3; i++)
       items.push(<Card/>)
   }
}

export default MainPage;
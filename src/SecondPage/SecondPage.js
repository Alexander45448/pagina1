import React from 'react'

import Bighero2 from './Bighero2'
import Card2 from './Card2'

var items = []

class SecondPage extends React.Component {
   render(){
    return(
        <React.Fragment>
            <Bighero2/>
            <div className="container-fluid">
                <div className="row">
                <Card2 title ="Toyota Land Cruiser"  text="El Toyota Land Cruiser es un todoterreno grande disponible en versiones de 3 y 5 puertas. Es de lo más eficaz que hay en off-road real, sin renunciar a un interior bastante civilizado. No confundir con SUV premium, esto es otra cosa. "/>
                <img src ="https://www.diariomotor.com/imagenes/picscache/1920x1600c/toyota-land-cruiser-2018-3_1920x1600c.jpg"  alt="LAND" width="500" HSPACE="10" VSPACE="10" > 
                </img>
                <Card2 title ="Jeep Wrangler" text="La nueva generación mantiene el encanto de siempre pero añade muchas novedades que lo convierten en un producto moderno adaptado a las necesidades actuales. El motor diésel es resolutivo y no gasta demasiado  "/>
                <img src ="https://www.autobild.es/sites/autobild.es/public/dc/fotos/Jeep-Wrangler-2018-A01.jpg"  alt="JEPP" width="500" HSPACE="10" VSPACE="10"> 
                </img>
                <Card2 title ="Land Rover Discovery" text="El Land Rover Discovery es un enorme SUV de lujo con altísimas capacidades para circular fuera del asfalto. Cuenta con suspensión neumática de altura regulable, todos los juguetes de Land Rover para circular por diferentes superficies y una sensación de control absoluta en pendientes. En carretera es un transatlántico de lujo: grande, pesado, con tendencia a seguir siempre en línea recta pero cómodo y espacioso para 7 ocupantes. " />
                <img src ="https://st.motortrendenespanol.com/uploads/sites/5/2017/02/2017-Land-Rover-Discovery-off-road-front-three-quarter-e1489507577484.jpg?interpolation=lanczos-none&fit=around%7C392%3A262"  alt="LANDROVER" width="500" HSPACE="10" VSPACE="10"> 
                </img>
                </div>

            </div>
        </React.Fragment>

    )
   }

   componentWillMount(){
       items = []
       for(let i = 0; i < 3; i++)
       items.push(<Card2/>)
   }
}

export default SecondPage;
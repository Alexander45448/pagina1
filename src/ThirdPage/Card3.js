import React from 'react'

class Card3 extends React.Component{
    render(){
        return(
           <div className="col-md-4">
               <h2>
                    {this.props.title}
                </h2>
                <p>
                    {this.props.text}
                </p>
           </div>
        )
    }
}

export default Card3;
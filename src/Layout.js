import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

var Layout = (props) =>{
    return(
    <React.Fragment>
        <Navbar/>
        {props.children}
        <Footer/>
    </React.Fragment>
    )
}

export default Layout;
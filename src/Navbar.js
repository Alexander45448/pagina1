import React from 'react'
import { Link } from 'react-router-dom'
 
class Navbar extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
                <Link className="navbar-brand" to="/">AUTOS DEPORTIVOS</Link>
                <div className="collapse navbar-collapse flex-grow-0 ml-auto">
                    <ul className="navbar-nav text-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/second">AUTOS TODOTERRENO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/third">AUTOS CLASICOS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
 
export default Navbar;
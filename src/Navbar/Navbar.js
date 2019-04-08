import React from 'react'
import './Navbar.scss' 
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Comprar from '../Comprar'
import Home from '../Home'
import Alquiler from '../Alquiler';
import Vender from '../Vender';

export default class Navbar extends React.Component {
    render() {
        return (
        <Router>
            <nav>
                <h4>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>CasaApp</Link>
                </h4>
                <ul>
                    <li>
                        <Link to="/comprar" style={{ textDecoration: 'none', color: 'white' }}>Comprar</Link>
                    </li>
                    <li>
                        <Link to="/alquiler" style={{ textDecoration: 'none', color: 'white' }}>Alquiler</Link>
                    </li>
                    <li>
                        <Link to="/vender" style={{ textDecoration: 'none', color: 'white' }}>Vender</Link>
                    </li>
                </ul>
            </nav>

        <Route exact path="/" component={Home} />
        <Route path="/comprar" component={Comprar} />
        <Route path="/alquiler" component={Alquiler} />
        <Route path="/vender" component={Vender} />
        </Router>
        )
    }
}

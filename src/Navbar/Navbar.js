import React from 'react'
import './Navbar.scss' 
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Comprar from '../Comprar/Comprar'
import Home from '../Home'

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
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/comprar" style={{ textDecoration: 'none', color: 'white' }}>Comprar</Link>
                    </li>
                    <li>Search</li>
                </ul>
            </nav>

        <Route exact path="/" component={Home} />
        <Route path="/comprar" component={Comprar} />
        </Router>
        )
    }
}

import React from 'react'
import './Home.scss' 
import Search from '../Search'
import Container from '../Maps/Maps'

export default class Home extends React.Component {
    render() {
        return (
            <div id="mainHomePage">
                <div id='headerHomePage'>
                    <h3>¿En donde quieres vivir?</h3>
                    <Search />
                </div>
                <div id="mapsDiv">
                    <Container />
                </div>
            </div>
        )
    }
}

import React from 'react'
import './Home.scss' 
import Search from '../Search'

export default class Home extends React.Component {
    render() {
        return (
            <div id='mainHomePage'>
            <h1>This is the home page.</h1>
            <h3>¿En donde quieres vivir?</h3>
            <Search />
            </div>
        )
    }
}

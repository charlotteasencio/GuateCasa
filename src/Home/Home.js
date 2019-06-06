import React from 'react'
import './Home.scss' 
import Search from '../Search'
import HomePageCard from '../HomePageCard'
import Footer from '../Footer';

export default class Home extends React.Component {
    render() {
        return (
            <div id="mainHomePage">
                <div id='headerHomePage'>
                    <h1>This is the home page.</h1>
                    <h3>¿En donde quieres vivir?</h3>
                    <Search />
                </div>
                <div className="aboutSection">
                    <HomePageCard/>
                    <HomePageCard/>
                    <HomePageCard/>
                </div>
                <Footer/>
            </div>
        )
    }
}

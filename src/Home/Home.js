import React from 'react'
import './Home.scss' 
import Search from '../Search'
<<<<<<< HEAD
import HomePageCard from '../HomePageCard'
import Footer from '../Footer';
=======
import Container from '../Maps/Maps'
>>>>>>> 07fad3cb8c2b5a746b65b13102248ab1ac32b25f

export default class Home extends React.Component {
    render() {
        return (
            <div id="mainHomePage">
                <div id='headerHomePage'>
                    <h3>¿En donde quieres vivir?</h3>
                    <Search />
                </div>
<<<<<<< HEAD
                <div className="aboutSection">
                    <HomePageCard/>
                    <HomePageCard/>
                    <HomePageCard/>
=======
                <div id="mapsDiv">
                    <Container />
>>>>>>> 07fad3cb8c2b5a746b65b13102248ab1ac32b25f
                </div>
                <Footer/>
            </div>
        )
    }
}

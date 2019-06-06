import React, { Component } from 'react';
import './HomePageCard.scss'

export default class HomePageCard extends Component {
    render() {

        return (
            <div className="HomePageCard">
                <h2 className="HomePageCard__Title">Title</h2>
                <img className="HomePageCard__Image" src="https://via.placeholder.com/300X200" alt="placeholder"></img>
                <button className="HomePageCard__Button">Example</button>
            </div>
        )
    }
}
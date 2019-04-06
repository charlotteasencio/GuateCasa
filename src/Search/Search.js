import React from 'react'
import './Search.scss' 

export default class Search extends React.Component {
    render() {
        return (
            <div id='searchBox'>
                <input type="text" name="ciudad"></input>
                <select>
                    <option value="alquier">Alquiler</option>
                    <option value="comprar">Comprar</option>
                </select>
            </div>
        )
    }
}
import React from 'react'
import './Search.scss' 
//import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import Comprar from '../Comprar'
//import Alquiler from '../Alquiler';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedValue: ''
        };
      }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }

      handleSelect = (event) => {
          this.setState({selectedValue: event.target.value})
      }

      handleSubmit = (event) => {
        console.log('A city was searched: ' + this.state.value);
        console.log('Selection is: ' + this.state.selectedValue);
        //if(this.state.selectedValue === 'alquiler') {
        //    this.props.history.push('/alquiler');
        //} else {
        //    this.props.history.push('/comprar')
        //}
        event.preventDefault();
      }

    render() {
        return (
                <form onSubmit={this.handleSubmit} id='searchBox'>
                    <div id="row1">
                        <input type="text" value={this.state.value} onChange={this.handleChange} name="ciudad"></input>
                        <select value={this.state.selectedValue} onChange={this.handleSelect}>
                            <option value="alquiler">Alquiler</option>
                            <option value="comprar">Comprar</option>
                        </select>
                    </div>
                   <button type="submit">Search</button>
                </form>
        )
    }
}
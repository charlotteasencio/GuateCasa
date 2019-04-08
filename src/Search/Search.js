import React from 'react'
import './Search.scss' 

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }

      handleSubmit = (event) => {
        alert('A city was searched: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id='searchBox'>
                <div id="row1">
                    <input type="text" value={this.state.value} onChange={this.handleChange} name="ciudad"></input>
                    <select>
                        <option value="alquier">Alquiler</option>
                        <option value="comprar">Comprar</option>
                    </select>
                </div>
                <button type="submit">Search</button>
            </form>
        )
    }
}
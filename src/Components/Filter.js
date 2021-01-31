import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between m-1 p-1">
                <p className="showing">Showing {this.props.count} products</p>
                <select name="items"  className="selectDropdown"
                    value={this.props.sort} 
                    onChange={this.props.handleChangeSort}>
                    <option value="">Defualt Sort</option>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest"> Highest to Lowest</option>
                </select>
             </div>
        )
    }
}

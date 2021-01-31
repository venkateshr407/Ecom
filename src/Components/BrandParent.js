import React, { Component } from 'react'

export class BrandParent extends Component {
    render() {
        return (
            <div className="topBrands">
                <img src={this.props.brandImages} alt={this.props.brandtitle}/>
                <div className="innerBrands">
                    <h5>{this.props.brandtitle}</h5>
                    <img className="stars" src={this.props.stars} alt={this.props.brandtitle}/>
                    <p>{this.props.brandPrice}</p>
                </div>
            </div>
        )
    }
}
export default BrandParent

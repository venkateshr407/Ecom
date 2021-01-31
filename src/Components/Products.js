import React, { Component } from 'react';

export class Products extends Component {
    
    render() {
        const productItem = this.props.products.map( product => (
            <div className="cards m-1" key={product.id}>
                <div className="card" style={{width: "15rem"}}>
                    <img src={product.images} style={{objectFit:"cover", height:"25vh"}}  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>
                            <p className="card-text">{product.price}</p>
                        </div>
                </div>
            </div>
            )
        )
        return (
            <div className="cards">
                {productItem}
            </div>
        )
    }
}

export default Products
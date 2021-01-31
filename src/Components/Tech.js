import React, {useState} from 'react';
import Header from './Header';

export default function Tech() {
    const [products] = useState([
        {
            id:"7",
            title:"Boat Head Phone",
            price:"$20",
            images:"https://images-na.ssl-images-amazon.com/images/I/61stQYWQO4L._SL1500_.jpg",
        },
        {
            id:"5",
            title:"Lenovo ThinkPad E14 Intel Core i5 10th",
            price:"$499",
            images:"https://images-na.ssl-images-amazon.com/images/I/71k3N4gxNeL._SX679_.jpg",
        },
        {
            id:"2",
            title:"iPhone SE",
            price:"$413",
            images:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574260374",
        },
    ])
    return (
        <div className="container linkProducts ">
            <Header/>
            <div className="linkProducts">
                <h2>Technologies</h2>
                <div className="techProducts">
                {products.map((product) => (
                    <div className="cards" key={product.id} >
                        <div className="card" style={{width:"70%",height:"auto"}}>
                            <img src={product.images}  className="card-img-top" alt={product.title}/>
                                <div className="card-body">
                                    <h6 className="card-title">{product.title}</h6>
                                    <p className="card-text">{product.price}</p>
                                </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


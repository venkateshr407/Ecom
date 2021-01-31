import React, {useState} from 'react';
import Header from './Header';

export default function Home() {
    const [products] = useState([
        {
            id:"3",
            title:"Artificial plant",
            price:"₹50",
            images:"https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000008585514-1000008585513_01-710.jpg",
        },
        {
            id:"4",
            title:"Solimo Optima King Size Bed",
            price:"₹55,999",
            images:"https://ii1.pepperfry.com/media/catalog/product/n/i/1100x1210/nikki-king-size-bed-in-brown---sonoma-oak-finish-by-mintwud-nikki-king-size-bed-in-brown---sonoma-oa-ss8zaj.jpg",
        },
        {
            id:"9",
            title:"Bean Bag Covers",
            price:"₹2000",
            images:"https://images-na.ssl-images-amazon.com/images/I/31jnFhMJdrL.jpg",
        },
    ])
    return (
        <div className="container">
            <Header/>
            <div className="linkProducts">
                <h2>Home Accessories</h2>
                <div className="techProducts">
                {products.map((product) => (
                    <div className="cards d-flex" key={product.id}>
                        <div className="card" style={{width:"60%",height:"auto"}}>
                            <img src={product.images} className="card-img-top" alt={product.title}/>
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


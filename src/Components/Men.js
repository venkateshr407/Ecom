import React, {useState} from 'react';
import Header from './Header';

export default function Men() {
    const [products] = useState([
        
        {
            id:"1",
            title:"Women's White Cotton Straight Calf Length Block Printed Kurti",
            price:"₹1500",
            images:"https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/Ethnic_store/kurta._SY530_QL85_.jpg",
        },
        {
            id:"2",
            title:"Silk Saree with Blouse Piece",
            price:"₹1000",
            images:"https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/Ethnic_store/saree._SY530_QL85_.jpg",
        },
        {
            id:"3",
            title:"Straight Rayon Gold Print Kurti Skirt Set for Women",
            price:"₹400",
            images:"https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/Ethnic_store/salwarsuit._SY530_QL85_.jpg",
        },
        {
            id:"4",
            title:"US Polo Association Boy's Plain Polo",
            price:"₹100",
            images:"https://cdn03.nnnow.com/web-images/preview/styles/TB6VHWGXEH7/1483966119593/1.jpg",
        }
       
    ])
    return (
        <div className="container linkProducts ">
            <Header/>
            <div className="linkProducts">
                <h2>Men / Women</h2>
                <div className="techProducts">
                {products.map((product) => (
                    <div className="cards d-flex" key={product.id}>
                        <div className="card" style={{width:"70%",height:"auto"}}>
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


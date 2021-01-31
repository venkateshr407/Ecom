import React, {useState} from 'react';
import Header from './Header';

export default function Books() {
    const [products] = useState([
        {
            id:"1",
            title:"HTML & CSS: The Complete Reference, Fifth Edition",
            price:"₹150",
            images:"https://images-na.ssl-images-amazon.com/images/I/51HfkDbya7L._SX378_BO1,204,203,200_.jpg",
        },
        {
            id:"2",
            title:"Java - The Complete Reference ",
            price:"₹200",
            images:"https://images-na.ssl-images-amazon.com/images/I/51k5NgL+B+L._SX258_BO1,204,203,200_.jpg",
        },
        {
            id:"3",
            title:"Research Methods in Education",
            price:"₹150",
            images:"https://images-na.ssl-images-amazon.com/images/I/41EQVRNnSvL._SX374_BO1,204,203,200_.jpg",
        }
       
    ])
    return (
        <div className="container linkProducts ">
            <Header/>
            <div className="linkProducts">
                <h2>Education</h2>
                <div className="techProducts">
                {products.map((product) => (
                    <div className="cards d-flex" key={product.id} >
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


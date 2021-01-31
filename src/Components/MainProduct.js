import React, { Component } from 'react';

export class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[
                {
                    id:"1",
                    title:"Artificial plant",
                    price:"₹50",
                    images:"https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000008585514-1000008585513_01-710.jpg",
                },
                {
                    id:"2",
                    title:"Java - The Complete Reference ",
                    price:"₹200",
                    images:"https://images-na.ssl-images-amazon.com/images/I/51k5NgL+B+L._SX258_BO1,204,203,200_.jpg",
                },
                {
                    id:"3",
                    title:"Solimo Optima King Size Bed",
                    price:"₹55,999",
                    images:"https://ii1.pepperfry.com/media/catalog/product/n/i/1100x1210/nikki-king-size-bed-in-brown---sonoma-oak-finish-by-mintwud-nikki-king-size-bed-in-brown---sonoma-oa-ss8zaj.jpg",
                },
                {
                    id:"4",
                    title:"Bean Bag Covers",
                    price:"₹2000",
                    images:"https://images-na.ssl-images-amazon.com/images/I/31jnFhMJdrL.jpg",
                },
                {
                    id:"5",
                    title:"Women's White Cotton Straight Calf Length Block Printed Kurti",
                    price:"₹1500",
                    images:"https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/Ethnic_store/kurta._SY530_QL85_.jpg",
                },
                {
                    id:"6",
                    title:"Boat Head Phone",
                    price:"$20",
                    images:"https://images-na.ssl-images-amazon.com/images/I/61stQYWQO4L._SL1500_.jpg",
                },
                {
                    id:"7",
                    title:"Lenovo ThinkPad E14 Intel Core i5 10th",
                    price:"$499",
                    images:"https://images-na.ssl-images-amazon.com/images/I/71k3N4gxNeL._SX679_.jpg",
                },
                {
                    id:"8",
                    title:"US Polo Association Boy's Plain Polo",
                    price:"₹100",
                    images:"https://cdn03.nnnow.com/web-images/preview/styles/TB6VHWGXEH7/1483966119593/1.jpg",
                },
                {
                    id:"9",
                    title:"iPhone SE",
                    price:"$413",
                    images:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574260374",
                },
            
            ],
            filteredProducts:[],
        }
        this.handleChangeSort = this.handleChangeSort.bind(this)

    }
    handleChangeSort (e) {
        this.setState({sort: e.target.value});
        this.listProducts();
    }
    listProducts(){
        this.setState(state => {
            if(state.sort !== ''){
                state.products.sort((a,b)=>(state.sort === 'lowest')? 
                (a.price < b.price?1:-1): 
                (a.price > b.price?1:-1))
            } else {
                state.products.sort((a,b)=>(a.id<b.id?1:-1));
            }return {filteredProducts: state.products};
        })
    }
    
    render() {
        const productItem = this.props.products.map( product => (
            <div className="cards m-1" key={product.id}>
                <div className="card" style={{width: "15rem"}}>
                    <img src={product.images} style={{objectFit:"cover", height:"30vh"}}  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">{product.title}</h6>
                            <p className="card-text">{product.price}</p>
                        </div>
                </div>
            </div>
            )
        )
        return (
            <div className="cards" >
                {productItem}
            </div>
        )
    }
}

export default Products
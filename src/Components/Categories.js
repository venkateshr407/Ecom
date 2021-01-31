import React, { Component } from 'react'
import iphone from '../Assets/iphone.jpg';
import bads from '../Assets/beds.jpg';
import tshrit from '../Assets/t-shrit.jpg';
import BrandParent from './BrandParent';
import Filter from './Filter';
import Products from './Products';
import stars from '../Assets/stars.png';
import { Link } from 'react-router-dom';




export class Categories extends Component {
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
    // componentDidMount() {
    //     fetch('http://localhost:8000/products').then(res => res.json())
    //     .then(data => this.setState({
    //         products:data,
    //         filteredProducts:data
    //     }))
    // }
    handleChangeSort (e) {
        this.setState({sort: e.target.value});
        this.listProducts();
    }
    listProducts(){
        this.setState(state => {
            if(state.sort !== ''){
                state.products.sort((a,b)=>(state.sort === 'lowest')? 
                (a.price > b.price?1:-1): 
                (a.price < b.price?1:-1))
            } else {
                state.products.sort((a,b)=>(a.id<b.id?1:-1));
            }return {filteredProducts: state.products};
        })
    }

    render() {
        return (
            <div className="gridBox">
                <div className="sideBar">
                    <div className="content">
                        <h6>Categories</h6>
                        <div className="link">
                            <ul className="lists">
                                <li><Link to='/accessories' className=" ">Home</Link></li>
                                <li><Link to='/technologies' className=" ">Technologies</Link></li>
                                <li><Link to='/humans' className=" ">Men / Women</Link></li>
                                <li><Link to='/edu' className=" ">Educations</Link></li>
                            </ul>
                        </div>
                    <div className="filter">
                        <p>Filter by price</p>
                        <div className="inner-filter">
                            <button className="btn btn-filter">Filter</button>
                            <p>Price $0 - $899</p>
                        </div>
                    </div>
                    <div className="filter">
                        <p>Top products</p>
                            <BrandParent brandImages={iphone} brandtitle="iPhone 11" brandPrice="$599"  stars={stars}/>
                            <BrandParent brandImages={bads} brandtitle="Solimo Optima" brandPrice="$599" stars={stars}/>
                            <BrandParent brandImages={tshrit} brandtitle="Plain Polo" brandPrice="$599" stars={stars}/>
                        </div>
                    </div> 
                    
                    <div className="itemsContent">
                        <div className="filterBox">
                        <Filter 
                            size={this.state.size}
                            sort={this.state.sort}
                            handleChangeSize={this.handleChangeSize}
                            handleChangeSort={this.handleChangeSort}
                            count={this.state.filteredProducts.length}
                        /><br/>
                    </div>
                    <div className="mainProductList">
                        <Products
                            products={this.state.filteredProducts}
                            handleAddToCart={this.state.handleAddToCart}
                        />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories

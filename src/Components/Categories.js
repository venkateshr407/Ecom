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
            products:[],
            filteredProducts:[],

        }
        this.handleChangeSort = this.handleChangeSort.bind(this)
    }
    componentDidMount() {
        fetch('http://localhost:8000/products').then(res => res.json())
        .then(data => this.setState({
            products:data,
            filteredProducts:data
        }))
    }
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
                        />
                    </div>
                        <Products 
                            products={this.state.filteredProducts}
                            handleAddToCart={this.state.handleAddToCart}
                        />
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories

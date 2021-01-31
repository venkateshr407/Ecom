import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import PopUpScreen from './PopUpScreen'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
 
    const TogglePopUp = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="container p-0">
            <div className="headerContent mt-3 d-flex justify-content-between">
                <Link to="/"><h1>Products</h1></Link>
                <button className="btn" onClick={TogglePopUp} >Add Products</button> 
                {isOpen && <PopUpScreen
                    content= {
                        <>
                            <div className="container">
                                <div className="addItems">
                                    <h3> Add Product</h3>
                                    <div className="formItems">
                                        <form >
                                        {/* <form onSubmit={this.addProduct}> */}
                                            <label>Product Title:</label><br/>
                                            <input type="text" placeholder="Enter product title"/><br/>
                                            <label>Price:</label><br/>
                                            <input type="text"  placeholder="Enter price"/><br/>
                                            <label>Upload Product Image:</label><br/>
                                            <input type="file" id="myfile" name="myfile" />
                                        </form>
                                        <div className="formBtn">
                                            <button className="bt " onClick={TogglePopUp}>Cancel</button>
                                            <button className="btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }
                 handleClose={TogglePopUp}   
                />}
            </div>
        </div>
    )
}


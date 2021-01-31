import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function AddProduct() {

    const [isTitle, setTitle] = useState('')
    const [isPrice, setPrice] = useState('')
    const [file, setFile] = useState('')

    async function addProduct(){
        const formData = new FormData();
        formData.append('isTitle', isTitle);
        formData.append('isPrice', isPrice);
        formData.append('file', file);
       
    }
    return (
            <div className="container addProduct">
                <div className="addItems">
                    <div className="formItems">
                    <h3> Add Product</h3>
                        <form >
                            <label>Product Title:</label><br/>
                            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter product title"/><br/>
                            <label>Price:</label><br/>
                            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Enter price"/><br/>
                            <label>Upload Product Image:</label><br/>
                            <input type="file" id="myfile" name="myfile" onChange={(e) => setFile(e.target.files[0])}/>
                        </form>
                        <div className="formBtn">
                            {/* <button className="bt " onClick={TogglePopUp}>Cancel</button> */}
                            <Link to='/' className="btn ">Cancel</Link>
                            <button className="btn" onClick={addProduct}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

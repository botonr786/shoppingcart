import React from 'react';
import {Link} from 'react-router-dom';

const ProductStore=()=>{
    return(
        <>
        <div className="container">
            <div className="col-sm-4 offset-sm-4">
                <div className="div2">
                 <Link to="/Product"> <center><h1 >Product</h1></center></Link>
                   <Link to="/Tshirt"><button className="btn btn-outline-primary" className="form-control">T-shirt online</button></Link>
                    <Link to="/Couton"><button className="btn btn-outline-danger" className="form-control">Couton shirt online</button></Link>
                    <Link  to="/Blazar"><button className="btn btn-outline-success" className="form-control">Blazar online</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductStore;
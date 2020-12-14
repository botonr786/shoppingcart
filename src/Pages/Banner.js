import React from 'react';
import Img from '../image/img3.jpg';
import ProductStore from './ProductStore';

const Banner=()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="card py-3">
                  <img src={Img} alt="notfound"/>
                  </div>
                </div>
            </div>
            <ProductStore/> 
        </div>
        </>
    )
}
export default Banner;
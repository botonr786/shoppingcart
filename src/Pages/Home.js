import React from 'react';
import {Link} from 'react-router-dom';
import Img from '../image/img3.jpg';
import About from './About';
import Contact from './Contact';
const Home=()=>{
    return(
        <>
        <div className="body">
        <div className="container">
            <div className="row">
                <div className="card py-5">
                    <img src={Img}/>       
                </div>
            </div>   
        </div> 
        </div>
        
        
        </>
    )
}
export default Home;
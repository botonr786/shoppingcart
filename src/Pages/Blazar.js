 import React, { useContext } from 'react';
import Banner from './Banner';
 import {BlazarContext} from './BlazarContext';

 const Blazar=()=>{
     const {Blazars}=useContext(BlazarContext);
     return(
         <>
         <div className="body">
         <Banner/>
         <div className="container">
             <div className="row">
                 {Blazars.map((Blazar)=>{
                     return(
                         <div className="card-group">
                             <div className="card">
                                 <div className="col-sm-4 py-3">
                                     <img src={Blazar.image} alt="not found"/>
                                 </div>
                                 <div className="body-card">
                                          {Blazar.id}<br/>
                                        <center>  {Blazar.name}<br/>
                                        Rs:{Blazar.price}.00<br/>
                                        <button className="btn btn-danger">ADD_TO_CART</button>
                                        </center>
                                      </div>
                             </div>
                         </div>
                     )
                 })}
             </div>
         </div>
         </div>
         </>
     )
 }
 export default Blazar;
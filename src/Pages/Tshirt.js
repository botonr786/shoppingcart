  import React,{useContext} from 'react';
  import {TshirtContext} from './TshirtContext';
  import Banner from './Banner';


  const Tshirt=()=>{
      const {Tshirts}=useContext(TshirtContext);
      
      return(
          <>
          <div className="body">
          <Banner/>
          <div className="container">
              
             <center> <h1 style={{backgroundColor:"teal"}}>Product</h1><br/><br/></center>
              <div className="container">
                  <div className="row">
                      {Tshirts.map((Tshirt)=>{
                          return(
                              
                              <div className="group-card">
                                  <div className="card">
                                      <div className="col-sm-3 py-5">
                                          <div className="div1">
                                          <img src={Tshirt.image} alt="not found"/>
                                          </div>
                                      </div>
                                      <div className="body-card">
                                          {Tshirt.id}<br/>
                                        <center>  {Tshirt.name}<br/>
                                        Rs:{Tshirt.price}.00<br/>
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
          </div>
          </>
      )
  }
  export default Tshirt;
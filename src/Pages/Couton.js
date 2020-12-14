import React, {useContext,useState} from 'react'
import {CoutonContext} from '../Pages/CoutonContext';
import Banner from './Banner';


const Couton=()=>{
    const [Count,upValue]=useState(0);
    const {Coutons}=useContext(CoutonContext);

    // const inputType=(event)=>{
    //   console.log(event.target.value);
    //   console.log(event.target.name);

    //   const {name,value}=event.target;
    // }
    const CartCount=(props)=>{
        upValue(Count+1)
    }
    return(
        <>
        <div className="body">
        <Banner/>
        <div className="container">
            <div className="row">
                {Coutons.map((Couton)=>{
                    return(
                        <div className="card-group">
                            <div className="card">
                                <div className="col-sm-3 py-3">
                                    <img src={Couton.image} alt="not found"/>
                                     <h1>{Count}</h1>
                                </div>
                                <div className="body-card">
                                          {Couton.id}<br/>
                                        <center>  {Couton.name}<br/>
                                        Rs:{Couton.price}.00<br/>
                                        <button className="btn btn-danger" onClick={CartCount}>ADD_TO_CART</button>
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
export default Couton;
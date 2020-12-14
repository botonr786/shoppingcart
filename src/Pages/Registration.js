import React, { useState } from 'react';
// import Img from '../image/img.jpg';


const Registration=()=>{
    const [cuValue,upValue]=useState({
        first:"",
        last:"",
        gmail:"",
        number:"",
        password:"",
        state:"",
        gender:"",
    });
    const inputType=(event)=>{
      console.log(event.target.value);
      console.log(event.target.name); 
      const {name,value}=event.target;
      upValue((pre)=>{
          return{
              ...pre,
             [name]:value,
          }
      })
    }
    const submited=(event)=>{
      event.preventDefault();
      alert(`first name ${cuValue.first} last name ${cuValue.last} gmail id ${cuValue.gamil}
       phone number ${cuValue.number} password ${cuValue.password}`);
    }
    return(
        <>
        <div className="container">
                <form onSubmit={submited}>
                    <div className="row">
                        {/* <div className="col-sm-4 py-5">
                             <img src={Img} alt="notfound"/>
                        </div> */}
                        
                        <div className="col-sm-5 offset-sm-3 py-3">
                          <center>  <h1 style={{backgroundColor:"teal"}}>Registration Pages</h1></center>
                            <input type="text" placeholder="Enter The First Name" className="form-control"
                             name="first" onChange={inputType} value={cuValue.first}/><br/>

                            <input type="text" placeholder="Enter The Last Name" className="form-control" 
                            name="last" onChange={inputType} value={cuValue.last}/><br/>

                            <input type="email" placeholder="Enter The Gmail id" className="form-control"
                             name="gmail" onChange={inputType} value={cuValue.gamil}/><br/>

                            <input type="text" placeholder="Enter The Phone number" className="form-control"
                             name="number" onChange={inputType} value={cuValue.number}/><br/>

                            <input type="password" placeholder="Enter The Password" className="form-control"
                             name="password" onChange={inputType} value={cuValue.password}/><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 offset-sm-3">
                            <select className="form-control" name="state" onChange={inputType}>
                                <option value="">State</option>
                                <option value={cuValue.state}>WestBengal</option>
                                <option value={cuValue.state}>karnataka</option>
                                <option value={cuValue.state}>Assam</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <select className="form-control" name="gender" onChange={inputType}>
                                <option value="">Gender</option>
                                <option value={cuValue.gender}>Male</option>
                                <option value={cuValue.gender}>Femal</option>
                                <option value={cuValue.gender}>other</option>
                            </select>  
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-sm-2 offset-sm-3">
                    <input type="submit" className="btn btn-outline-success"/>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default Registration;
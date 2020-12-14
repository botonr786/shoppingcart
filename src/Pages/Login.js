import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import Img from '../image/img2.jpg';

const Login=()=>{
    const [firstvalue,upvalue]=useState({
        first:'',
        last:'',
        password:'',
    });
    
    const inputType=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
      const {value,name}=event.target;
      upvalue((pre)=>{
          return{
           ...pre,
           [name]:value,
          }
      })
      
    };
    const submited=(evnt)=>{
        evnt.preventDefault();
        alert(`my name is ${firstvalue.first},my lst name ${firstvalue.last},my password ${firstvalue.password}`);
    }
    return(
        <>
        <div className="container">
            <div className="row">
                
                {/* <div className="col-sm-3 py-5">
                    <img src={Img} alt="notfound"/>
                </div>
                 */}
                <div className="col-sm-5 offset-sm-3 py-5">
                    <center><h1 style={{backgroundColor:"teal"}}>Login Page</h1></center><br/><br/>
                    <form onSubmit={submited}>

                    <input type="text"placeholder="Enter the First Name"
                     className="form-control" name="first"
                       onChange={inputType} value={firstvalue.first}/><br/>
                    <input type="text" placeholder="Enter the Last name"
                     className="form-control" name="last"
                       onChange={inputType} value={firstvalue.last}/><br/>
                    <input type="password" placeholder="Enter the password" 
                    className="form-control" name="password" 
                     onChange={inputType} value={firstvalue.password}/><br/>
                    
                    <div className="row">
                    <input type="submit" className="btn btn-outline-primary"/>
                    <div className="col-sm-3 ">
                   <Link to="/Registration"><button className="btn btn-outline-success">Registration</button></Link>
    
                    </div>
                    </div>
                    </form>
                    
            
                       
                   

                </div>
            </div>
        </div>
        </>
    )
}
export default Login;
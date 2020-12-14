import React, { useState } from 'react';
import Cont from '../Component/Backimg/img1.jpg';
import Home from './Home';

const Contact=()=>{
    const [CuValue,UpValue]=useState({
        first:"",
        last:"",
        gmail:"",
        number:"",
        sumary:""
    });
    const inputType=(event)=>{
     console.log(event.target.value);
     console.log(event.target.name);
     const {name,value}=event.target;
     UpValue((pre)=>{
         return{
             ...pre,
             [name]:value,
         }
     });
    };
    const Submited=(event)=>{
      event.preventDefault();
      alert(`first name ${CuValue.first},last name ${CuValue.last},
      gmail id ${CuValue.gmail},Phone Number ${CuValue.number},
      summery is ${CuValue.sumary}`);
    }
    return(
        <>
        <Home/>
        <div className="body">
        <div className="container"><br/>
           <center><h1 style={{backgroundColor:"teal"}}>Contact Page</h1></center><br/><br/>
            <div className="row">
                <div className="col-sm-7">
                    <div className="card ">
                        <img src={Cont} alt="not found"/>
                    </div>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={Submited}>
                        <center><h1 style={{backgroundColor:"thistle"}}>Online Registration</h1></center><br/>
                        <input type="text" className="form-control" placeholder="Enter The First Name"
                         onChange={inputType} name="first" value={CuValue.first}/><br/>

                        <input type="text" className="form-control" placeholder="Enter The Last Name"
                         onChange={inputType} name="last" value={CuValue.last}/><br/>

                        <input type="email" className="form-control" placeholder="Enter The Gmail id"
                         onChange={inputType} name="gmail" value={CuValue.gmail}/><br/>

                        <input type="number" className="form-control" placeholder="Enter The Phone Number"
                         onChange={inputType} name="number" value={CuValue.number}/><br/>

                        <textarea rows="4" cols="10" className="form-control" placeholder="Write Some Summery"
                         onChange={inputType} name="sumary" value={CuValue.sumary}/><br/>

                        <input type="submit" className="btn btn-outline-success"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Contact;
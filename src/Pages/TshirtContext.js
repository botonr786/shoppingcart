import React,{createContext, useState} from 'react';
import Img1 from '../Simage/img1.jpg';
import Img2 from '../Simage/img2.jpg';
import Img3 from '../Simage/img3.jpg';
import Img4 from '../Simage/img4.jpg';
import Img5 from '../Simage/img5.jpg';
import Img6 from '../Simage/img6.jpg';
import Img7 from '../Simage/img7.jpg';
import Img8 from '../Simage/img8.jpg';
import Img9 from '../Simage/img9.jpg';
import Img10 from '../Simage/img10.jpg';
import Img11 from '../Simage/img11.jpg';
import Img12 from '../Simage/img12.jpg';

export const TshirtContext=createContext();

const TshirtContextProvider=(props)=>{
    const [Tshirts]=useState([
        {id:1,name:'Img1',price:300,image:Img1},
        {id:2,name:'Img2',price:200,image:Img2},
        {id:3,name:'Img3',price:350,image:Img3},
        {id:4,name:'Img4',price:250,image:Img4},
        {id:5,name:'Img5',price:400,image:Img5},
        {id:6,name:'Img6',price:250,image:Img6},
        {id:7,name:'Img7',price:300,image:Img7},
        {id:8,name:'Img8',price:190,image:Img8},
        {id:9,name:'Img9',price:200,image:Img9},
        {id:10,name:'Img10',price:300,image:Img10},
        {id:11,name:'Img11',price:200,image:Img11},
        {id:12,name:'Img12',price:350,image:Img12}
    ])
    return(
        <>
        <TshirtContext.Provider value={{Tshirts:[...Tshirts]}}>
          {props.children}
        </TshirtContext.Provider>
        
        </>
    )
}
export default TshirtContextProvider;
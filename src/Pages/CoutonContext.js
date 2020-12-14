import React, { createContext, useState } from 'react';
import Img1 from '../couton-image/img1.jpg';
import Img2 from '../couton-image/img2.jpg';
import Img3 from '../couton-image/img3.jpg';
import Img4 from '../couton-image/img4.jpg';
import Img5 from '../couton-image/img5.jpg';
import Img6 from '../couton-image/img6.jpg';
import Img7 from '../couton-image/img7.jpg';
import Img8 from '../couton-image/img8.jpg';
import Img9 from '../couton-image/img9.jpg';
import Img10 from '../couton-image/img10.jpg';
import Img11 from '../couton-image/img11.jpg';
import Img12 from '../couton-image/img12.jpg';

export const CoutonContext=createContext();
const CoutonContextProvider=(Props)=>{
    const [Coutons]=useState([
        {id:1,name:'Img1',price:3000,image:Img1},
        {id:2,name:'Img2',price:3500,image:Img2},
        {id:3,name:'Img3',price:3200,image:Img3},
        {id:4,name:'Img4',price:4000,image:Img4},
        {id:5,name:'Img5',price:4500,image:Img5},
        {id:6,name:'Img6',price:4200,image:Img6},
        {id:7,name:'Img7',price:4100,image:Img7},
        {id:8,name:'Img8',price:3200,image:Img8},
        {id:9,name:'Img9',price:3300,image:Img9},
        {id:10,name:'Img10',price:3600,image:Img10},
        {id:11,name:'Img11',price:3700,image:Img11},
        {id:12,name:'Img12',price:3900,image:Img12},
    ])
    return(
        <>
        <CoutonContext.Provider value={{Coutons:[...Coutons]}}>
            {Props.children}
        </CoutonContext.Provider>
        </>
    )
}
export default CoutonContextProvider;
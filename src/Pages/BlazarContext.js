import React, { createContext, useState } from 'react';
import Img1 from '../Blazar-pic/img1.jpg';
import Img2 from '../Blazar-pic/img2.jpg';
import Img3 from '../Blazar-pic/img3.jpg';
import Img4 from '../Blazar-pic/img4.jpg';
import Img5 from '../Blazar-pic/img5.jpg';
import Img6 from '../Blazar-pic/img6.jpg';
import Img7 from '../Blazar-pic/img7.jpg';
import Img8 from '../Blazar-pic/img8.jpg';
import Img9 from '../Blazar-pic/img9.jpg';
import Img10 from '../Blazar-pic/img10.jpg';
import Img11 from '../Blazar-pic/img11.jpg';
import Img12 from '../Blazar-pic/img12.jpg';

export const BlazarContext=createContext();

const BlazarContextProvider=(Props)=>{
    const [Blazars]=useState([
        {id:1,name:'Img1',price:3000,image:Img1},
        {id:2,name:'Img2',price:3000,image:Img2},
        {id:3,name:'Img3',price:3000,image:Img3},
        {id:4,name:'Img4',price:3000,image:Img4},
        {id:5,name:'Blazar',price:3000,image:Img5},
        {id:6,name:'Blazar',price:3000,image:Img6},
        {id:7,name:'Blazar',price:3000,image:Img7},
        {id:8,name:'Blazar',price:3000,image:Img8},
        {id:9,name:'Blazar',price:3000,image:Img9},
        {id:10,name:'Blazar',price:3000,image:Img10},
        {id:11,name:'Blazar',price:3000,image:Img11},
        {id:12,name:'Blazar',price:3000,image:Img12}

    ])
    return(
        <>
         <BlazarContext.Provider value={{Blazars:[...Blazars]}}>
            {Props.children}
        </BlazarContext.Provider>
        </>
    )
}
export default BlazarContextProvider;
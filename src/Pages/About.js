import React from 'react';
import Img1 from '../Component/Shopingmallpic/img1.jpg';
import Img2 from '../Component/Shopingmallpic/img2.jpg';
import Img3 from '../Component/Shopingmallpic/img3.jpg';
import Img4 from '../Component/Shopingmallpic/img4.jpg';
import Home from './Home';

const About=()=>{
    return(
        <>
        <div className="body">
        <Home/>
        <div className="container">
        <center><h1 style={{backgroundColor:"teal"}}>Company About Pages</h1></center>
            <div className="row">
                <div className="col-sm-6 py-5">
                    <div className="card">
                        <img src={Img1} alt="not found"/>
                    </div>
                </div>
                <div className="col-sm-6 py-5">
                  <center><h1 style={{backgroundColor:"silver"}}>MK2UK Shopping mall</h1></center>
                  <p style={{backgroundColor:"silver"}}>Shopping centre, also called shopping mall, or shopping plaza, 20th-century adaptation of the
                       historical marketplace, with accommodation made for automobiles. A shopping centre is a 
                       collection of independent retail stores, services, and a parking area conceived, constructed,
                        and maintained by a management firm as a unit. Shopping centres may also contain restaurants,
                         banks, theatres, professional offices, service stations, and other establishments.Aspects
                          considered by planners when a shopping centre is to be built include feasibility of the 
                          site in terms of the community’s ability to support a centre; adequate vehicular access;
                           and size, access, and topography of the site, as well as availability of utilities, zoning 
                           laws.</p>
                </div>  
                 
                <div className="col-sm-6 py-5">
                    <h1 style={{backgroundColor:"silver"}}>Figure out why you  a shirt</h1>
                    <p style={{backgroundColor:"silver"}}>These limitations can be overcome with the right amount of awareness, and reasonable expectations
                         for what is possible. Using t-shirt fabric as a design medium has an inherent set of constraints 
                         because of the print process, porousness of the surface, inks used, and its elasticity. Knowing 
                         these constraints is just half the battle, but we’ll show you the solutions to overcome the obstacles 
                         of dealing with fabric as a design medium.First, let’s begin by looking at the differences in the way fabric
                          and paper handle printed designs. Paper as a print medium translates best from what you see on the computer
                           screen to print. Since paper isn’t as absorbent as fabric,
                          the inks dry faster with minimal color mixing. More important, the inks dry.</p>
                </div> 
                <div className="col-sm-6 py-5">
                    <div className="card">
                        <img src={Img2} alt="not found"/>
                    </div>
                </div>
                

                <div className="col-sm-6 py-5">
                    <div className="card">
                        <img src={Img3} alt="not found"/>
                    </div>
                </div>
                <div className="col-sm-6 py-5">
                    <h1 style={{backgroundColor:"silver"}}>Concept Sketches</h1>
                    <p style={{backgroundColor:"silver"}}>I started by sketching out a variety of concepts that incorporated the functionality that I wanted in a bag.
                         I can't emphasize enough how much it helps to start with pencil and paper rather than jumping right onto
                          the computer. I also researched other bags, making notes of things I liked and didn't like about each.
                           The bag style that I eventually landed on is similar to a traditional postal messenger bag. One of the
                            key things I noticed from those classic bags is how the shoulder strap attached to the back of the bag
                             instead of the ends. This allows it to lay flatter against the body instead of bumping up against your 
                             hip while walking. These sketches helped me think through the various functionality and details.  
                        Ugmonk has always been.</p>
                </div> 
                 
                <div className="col-sm-6 py-5">
                    <h1 style={{backgroundColor:"silver"}}>Corduroy Trousers</h1>
                    <p style={{backgroundColor:"silver"}}>Once strictly the preserve of fictional (and real) inhabitants of academia, corduroy is one of the most underutilised
                         materials in men’s style and, if worn correctly, can make for an indispensable pair of trousers. There’s a 1970s
                          revival going on in menswear, too, so there’s never been a better time to cover your legs in cord.

                    Cord is a textile composed of woven, twisted cotton or wool, resulting in parallel lines (called ‘wales’).
                    Wool corduroy is the most durable type and wears particularly well. So, as well as bestowing a bit of superficial 
                    intelligence, cord trousers will withstand a fair bit of rough and tumble. The Indiana Jones of legwear, if you will.
                    They can get a bit warm, though, so it’s best to save them for when the cold really starts.</p>
                </div> 
                <div className="col-sm-6 py-5">
                    <div className="card">
                        <img src={Img4} alt="not found"/>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}
export default About;
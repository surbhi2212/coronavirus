import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import Page1 from "./Page1";
import Second from "./Second";
import Prevention from "./Prevention";
import add from '../assets/images/recl1.jpg';

export default function Main() {
    return(
        <div>
           <Header/>
           <Page1/>
           <div style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
            <img src={add}/>
           </div>
           <Second/>
           <Prevention/>
           <Footer/>
        </div>
    )
}
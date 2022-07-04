import React from "react";
import one from '../assets/images/first.jpg'
import './home.css';
import { Link } from "@mui/material";

export default function Page1() {
    return (
        <div className='p_one_main'>
       <img src={one} width='100%'/>
        
        <div style={{width:'50%'}}>
        <button className="button">PREVENTION</button>

        <div className="toplink" >
            <Link style={{color:'#FFF', textDecoration:'none'}} to={'/'} >Here is Why You Should Be Avoiding Crowds Because of COVID19</Link>
        </div>
        <div className='april'>
            <p>APRIL 8, 2020</p>
        </div>
        <div className="font">
<p></p>
Prevention Sugar seems to have developed a reputation as the big bad wolf in relation to health. We have reported on numerous studies associating sugar...  </div>
        </div>
            
        

        </div>
    )
}
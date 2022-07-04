import React from "react";
import logo from '../../assets/images/logo-png.jpg';
import './header.css';
import {FiSearch} from 'react-icons/fi';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
export default function Header() {


    return(
        <nav className="navbar navbar-expand-lg navbar-light main ">
            
            <div className="part1">
         <a className="navbar-brand logo" href="#">
    <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="" />
    <div>
        <div>
           <p><h3>Coronavirus</h3></p>   
        </div>
        <div ><h6 style={{marginTop:'-18px'}}>Medicine <p className="pro">PRO</p></h6></div>
        
    </div>
    </a>
    </div>
       
      
        <div className="links part2">
           <div className="logo">
               <p className='hbtn'>Home</p>
               <p className='hbtn'>Coronavirus</p>
               <p className='hbtn'>Vaccine</p>
               <p className='hbtn'>Treatment</p>
               <p className='hbtn'>Research</p>
               <p className='hbtn'>Impact</p>
               <p className='hbtn'>Global</p>
               
           </div>
           </div>
          
          <div className="part3">
          <button className='hbtn1' data-container="body" data-toggle="popover" data-placement="bottom" data-content="Bottom popover">Search
           <FiSearch  style={{margin:'5px'}}/>
          </button>

          
          
          </div>
          
      </nav>

  
    )
}
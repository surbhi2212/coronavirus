import React from "react";
import logotransparent from '../../assets/images/corona-symbol-transparent.webp';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs';
import { Link } from "react-router-dom";
export default function Footer() {


    return(
        <nav className=" fmain">
         <div style={{display:'flex', width:'100%',backgroundColor: 'black'}}>  
            <div>
         <a className="navbar-brand logo" href="#">
    <img src={logotransparent} width="60" height="60" className="d-inline-block align-top" style={{backgroundColor:'#000'}} alt="" />
    <div>
        <div>
           <p><h3 style={{color:'#FFF'}}>Coronavirus</h3></p>   
        </div>
        <div ><h6 style={{marginTop:'-18px', color:'#FFF'}}>Medicine <p className="pro">PRO</p></h6></div>
        
    </div>
    </a>
    </div>

    <div className='direction'>
        <div className="circle"><FaFacebookF className="icon"/></div>
        <div className="circle"><BsInstagram className="icon"/></div>
        <div className="circle"><BsTwitter className="icon"/></div>
        <div className="circle"><BsYoutube className="icon"/></div>
    </div>
      </div>

      <div className="gaping" style={{display:"flex"}}>
          <div  className="fhead">
            <h4>Behavior</h4>
            <Link to={'/'} className="link">Behavioral Protests, <br/>Coronavirus and a Baby on the Way</Link>
            <Link to={'/'} className="link">The Coronavirus Exposes Massive Education Digital Generation Gap</Link>
            <Link to={'/'} className="link">Quarantines Spark Confusion and Worries About Precedent</Link>
            <Link to={'/'} className="link">Know the Simptoms: What Will You Do If You Start Coughing?</Link>
            <Link to={'/'} className="link">The Dos and Donts of the ‘Social Distancing’ Behavior</Link>
          </div>

          <div  className="fhead">
            <h4>Prevention</h4>
            <Link to={'/'} className="link">Coronavirus Symptoms: What Are They and Should I See a Doctor?</Link>
            <Link to={'/'} className="link">Can Authorities Really Track the Spread of the Coronavirus?
</Link>
            <Link to={'/'} className="link">Despite All Prevention, You Are Likely to Get the Coronavirus</Link>
            <Link to={'/'} className="link">Here is Why You Should Be Avoiding Crowds Because of COVID19</Link>
            <Link to={'/'} className="link">Personal Hygiene for Prevention: Deep Clean, Then Clean Again</Link>
          </div>

          <div  className="fhead">
            <h4>Strategy</h4>
            <Link to={'/'} className="link">Who Qualifies for Paid Leave Under the Coronavirus Law</Link>
            <Link to={'/'} className="link">How to Help Workers Hurt by the Pandemic: Give, but Safely</Link>
            <Link to={'/'} className="link">All Sport Contests Are Canceled Over Coronavirus Concerns</Link>
            <Link to={'/'} className="link">What You Can Do Right Now to Combat the New Coronavirus</Link>
            <Link to={'/'} className="link">Some Countries Are Better Armored for Epidemics Than Others</Link>
          </div>

          <div className="fhead">
            <h4>Network</h4>
            <Link to={'/'} className="textlink" style={{color:'#FFF'}}>Home</Link>
            <Link to={'/'} className="textlink">Coronavirus</Link>
            <Link to={'/'} className="textlink">Vaccine</Link>
            <Link to={'/'} className="textlink">Treatment</Link>
            <Link to={'/'} className="textlink">Research</Link>
            <Link to={'/'} className="textlink">Impact</Link>
            <Link to={'/'} className="textlink">Global</Link>
          </div>

          <div className="fheadlast">
            <h4>Stay in touch</h4>

            <p>To be updated with all the latest news, offers and special announcements.</p>

            <input className="input" type='text' placeholder="   Email address" />

            <button className="btn">SIGN UP</button>
            
          </div>
      </div>
          
      </nav>

  
    )
}
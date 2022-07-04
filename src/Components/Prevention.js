import React from 'react'
import './Homenew.css'
 import mainImg from '../assets/images/add1.jpg'
 import image from '../assets/images/sm2-7.jpg'
 import img from '../assets/images/sm-9.jpg'
 import img1 from '../assets/images/sm-8.jpg'
import QuickCard from './Cards/QuickCard'
import PreventionCard from './Cards/PreventionCard/PreventionCard'


function Prevention() {
  return (
      <>
      <div className="container-fluid PreventionStatergy">
          <div className="container">
              <div className="prevention">
                  <div className="d-flex justify-content-center heading">
                      <p>Prevention Strategy</p>
                  </div>
                  </div>
                  <div className="row">
                      <div className="col-3  prevention-add-div ">
                          <img src={mainImg} alt="not found" />
                      </div>
                      <div className="col-6 main-prevention-cont">
                      <QuickCard img={img} type="Prevention" />
                      </div>
                      <div className="col-3 small-prev-card">
                          <PreventionCard img={image} />
                      </div>
                      <div className="col-3">
                      </div>
                      <div className="col-3 small-prev-card-data">
                          <PreventionCard img={img1} />
                      </div>
                      <div className="col-6 small-prev-card-data1">
                      <QuickCard img={image} type="Prevention" />
                      </div>
                  </div>
          </div>
      </div>
      </>
  )
}

export default Prevention
import React from 'react'
import Price from './Price';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


 function Service() {
    return (
        <section id="service">
            <div className="container">   
                <div className="row">
                <div className="col-md-4">
                <div class="box flyLeft">
                  <div class="icon">
                  <FontAwesomeIcon icon={faCoffee} size="lg"></FontAwesomeIcon>
                  </div>
                  <div class="text">
                    <h4>High <strong>Quality</strong></h4>
                    <p>
                      Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                </div>

                <div className="col-md-4">
                <div class="box flyLeft">
                  <div class="icon">
                  <FontAwesomeIcon icon={faCoffee} size="lg"></FontAwesomeIcon>
                  </div>
                  <div class="text">
                    <h4>High <strong>Quality</strong></h4>
                    <p>
                      Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                </div>

                <div className="col-md-4">
                <div class="box flyLeft">
                  <div class="icon">
                  <FontAwesomeIcon icon={faCoffee} size="lg"></FontAwesomeIcon>
                  </div>
                  <div className="text">
                    <h4>High <strong>Quality</strong></h4>
                    <p>
                      Lorem ipsum dolor sit amet, has ei ipsum scaevola deseruisse am sea facilisis.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                </div>
                
                 </div>
            </div>
            
            <Price />
                    
        </section>
    )
}

export default Service;
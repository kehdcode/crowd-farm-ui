import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import Testimonials from './Testimonials';


 function Price() {
    return (
        <div>
            <div className="row">
                <div className="container">
                    <div className="text-center">
                        <h1>Our <strong>Pricing</strong></h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, labores dolorum scriptorem eum an, te quodsi sanctus neglegentur.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                        <div className="col-md-3">
                        <div class="pricing-box-wrap animated-fast flyIn">
                         <div className="pricing-heading">
                            <h3>Simple <strong>Choice</strong></h3>
                        </div>
                  <div className="pricing-terms">
                    <h6>&#36;20.00 / Month</h6>
                  </div>
                  <div className="pricing-content">
                    <ul>
                    <FontAwesomeIcon icon={faCheck} size="sm"></FontAwesomeIcon> 100 applications
                      <li><i class="icon-ok"></i> 24x7 support available</li>
                      <li><i class="icon-ok"></i> No hidden fees</li>
                      <li><i class="icon-ok"></i> Free 30-days trial</li>
                      <li><i class="icon-ok"></i> Stop anytime easily</li>
                    </ul>
                  </div>
                  <div class="pricing-action">
                    <a href="#" class="btn btn-medium btn-theme"><i class="icon-chevron-down"></i> Sign Up</a>
                  </div>
                </div>
                </div>{/*End of colume */}
                        <div className="col-md-3">
                        <div class="pricing-box-wrap animated-fast flyIn">
                         <div className="pricing-heading">
                            <h3>Simple <strong>Choice</strong></h3>
                        </div>
                  <div className="pricing-terms">
                    <h6>&#36;20.00 / Month</h6>
                  </div>
                  <div className="pricing-content">
                    <ul>
                    <FontAwesomeIcon icon={faCheck} size="sm"></FontAwesomeIcon> 100 applications
                      <li><i class="icon-ok"></i> 24x7 support available</li>
                      <li><i class="icon-ok"></i> No hidden fees</li>
                      <li><i class="icon-ok"></i> Free 30-days trial</li>
                      <li><i class="icon-ok"></i> Stop anytime easily</li>
                    </ul>
                  </div>
                  <div class="pricing-action">
                    <a href="#" class="btn btn-medium btn-theme"><i class="icon-chevron-down"></i> Sign Up</a>
                  </div>
                </div>
                </div>{/*End of colume */}
                <div className="col-md-3">
                        <div class="pricing-box-wrap animated-fast flyIn">
                         <div className="pricing-heading">
                            <h3>Simple <strong>Choice</strong></h3>
                        </div>
                  <div className="pricing-terms">
                    <h6>&#36;20.00 / Month</h6>
                  </div>
                  <div className="pricing-content">
                    <ul>
                    <FontAwesomeIcon icon={faCheck} size="sm"></FontAwesomeIcon> 100 applications
                      <li><i class="icon-ok"></i> 24x7 support available</li>
                      <li><i class="icon-ok"></i> No hidden fees</li>
                      <li><i class="icon-ok"></i> Free 30-days trial</li>
                      <li><i class="icon-ok"></i> Stop anytime easily</li>
                    </ul>
                  </div>
                  <div class="pricing-action">
                    <a href="#" class="btn btn-medium btn-theme"><i class="icon-chevron-down"></i> Sign Up</a>
                  </div>
                </div>
                </div>{/*End of colume */}
                <div className="col-md-3">
                        <div class="pricing-box-wrap animated-fast flyIn">
                         <div className="pricing-heading">
                            <h3>Simple <strong>Choice</strong></h3>
                        </div>
                  <div className="pricing-terms">
                    <h6>&#36;20.00 / Month</h6>
                  </div>
                  <div className="pricing-content">
                    <ul>
                    <FontAwesomeIcon icon={faCheck} size="sm"></FontAwesomeIcon> 100 applications
                      <li><i class="icon-ok"></i> 24x7 support available</li>
                      <li><i class="icon-ok"></i> No hidden fees</li>
                      <li><i class="icon-ok"></i> Free 30-days trial</li>
                      <li><i class="icon-ok"></i> Stop anytime easily</li>
                    </ul>
                  </div>
                  <div class="pricing-action">
                    <a href="#" class="btn btn-medium btn-theme"><i class="icon-chevron-down"></i> Sign Up</a>
                  </div>
                </div>
                </div>{/*End of colume */}
                </div>
            </div>


        <Testimonials />     
        
        </div>
        
    )
}

export default Price;
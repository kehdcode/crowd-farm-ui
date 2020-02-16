import React from 'react'

 function Testimonials() {
    return (
        <div>
            <div className="row">
                <div className="container">
                    <div className="col-md-12 text-center">
                    <h3 class="title">What People <strong>SAYING</strong> About Us</h3>
                    </div>
                    <ul>
                    <li>
                <blockquote>
                  Aliquam a orci quis nisi sagittis sagittis. Etiam adipiscing, justo quis feugiat.Suspendisse eu erat quam. Vivamus porttitor eros quis nisi lacinia sed interdum lorem vulputate. Aliquam a orci quis nisi sagittis sagittis. Etiam adipiscing, justo quis
                  feugiat
                </blockquote>
                <div class="testimonial-autor">
                  <img src="img/dummies/testimonial/1.png" alt="" />
                  <h4>Hillary Doe</h4>
                  <a href="#">www.companyname.com</a>
                </div>
              </li>
              <li>
                <blockquote>
                  Aliquam a orci quis nisi sagittis sagittis. Etiam adipiscing, justo quis feugiat.Suspendisse eu erat quam. Vivamus porttitor eros quis nisi lacinia sed interdum lorem vulputate. Aliquam a orci quis nisi sagittis sagittis. Etiam adipiscing, justo quis
                  feugiat
                </blockquote>
                <div class="testimonial-autor">
                  <img src="img/dummies/testimonial/2.png" alt="" />
                  <h4>Michael Doe</h4>
                  <a href="#">www.companyname.com</a>
                </div>
              </li>
                    </ul>
                </div>{/*End of container */}

            </div>{/*End of row */}

            
        </div>
    )
}

export default Testimonials;

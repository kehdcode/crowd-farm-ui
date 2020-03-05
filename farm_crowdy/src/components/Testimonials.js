import React from 'react'
import Footer from './Footer';


 function Testimonials() {
    return (
      <div>
      <div className="row">
        <div className ="container">
          <div className ="col-md 12 text-center">
            <h1 className="bi">What They Say About Us</h1>
            <hr />
          </div>
        </div>
      </div>

      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
 
  <div className="carousel-inner">
    <div className="carousel-item active text-center">
      <img src="/images/3.jpg" className="img-thumbnail rounded-circle testi" alt="..." />
      <div className="carousel-caption d-none d-md-block testi-cap">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
        Nulla vitae elit libero, a pharetra augue mollis interdum<br/>
        Nulla vitae elit libero, a pharetra augue mollis interdum
        </p>
      </div>
    </div>
    <div className="carousel-item text-center">
      <img src="/images/2.jpg" className="img-thumbnail rounded-circle testi" alt="..." />
      <div className="carousel-caption d-none d-md-block testi-cap">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        Nulla vitae elit libero, a pharetra augue mollis interdum<br/>
        Nulla vitae elit libero, a pharetra augue mollis interdum
        </p>
      </div>
    </div>
    <div className="carousel-item text-center">
    <img src ="/images/1.jpg" className="img-thumbnail rounded-circle testi" alt=".."/>
      <div className="carousel-caption d-none d-md-block testi-cap">
        <h5 className="bi">John Abe</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        Nulla vitae elit libero, a pharetra augue mollis interdum<br/>
        Nulla vitae elit libero, a pharetra augue mollis interdum

        </p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<Footer />


</div>
    )
}

export default Testimonials;

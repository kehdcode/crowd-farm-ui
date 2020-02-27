import React from 'react'
import Footer from './Footer';


 function Testimonials() {
    return (
      <div>
      <div className="row">
        <div className ="container">
          <div className ="col-md 12 text-center">
            <h1>What They Say About Us</h1>
            <hr />
          </div>
        </div>
      </div>

      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active text-center">
      <img src="/images/3.jpg" className="img-thumbnail rounded-circle" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div className="carousel-item text-center">
      <img src="/images/2.jpg" className="img-thumbnail rounded-circle" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item text-center">
    <img src ="/images/1.jpg" className="img-thumbnail rounded-circle" alt=".."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>John Abe</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
<a href="#" class="scrollup"><i class="icon-angle-up icon-square icon-bglight icon-2x active"></i></a>

</div>
    )
}

export default Testimonials;

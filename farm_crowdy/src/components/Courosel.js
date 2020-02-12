import React from 'react'


function Courosel() {
    return (
        
<div id="carouselExampleControls" className="carousel slide slide-one" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active slide-one">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Welcome To Crowd Farmy</h1>
                    <p>lorem  ispsum lorem ispsum lorem ispsum lorem
                    ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem
                    ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem 
                    ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem 
        
                    </p>
                    <button type="button" class="btn btn-success btn-lg">Success</button>

                </div>
                <div className="col-md-6"> 
                <div className="img-box">
                    <img src ="/images/pic-1.png" className="pic-1"/>
                
                </div>

                </div>

            </div>

        </div>
      
    </div>
    <div className="carousel-item slide-two">
    <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Welcome To Crowd Farmy</h1>
                    <p>lorem  ispsum lorem ispsum lorem ispsum lorem
                    ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem
                    ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem 
                    ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem ispsum lorem 
        
                    </p>
                    <button type="button" class="btn btn-warning btn-lg">Success</button>

                </div>
                <div className="col-md-6"> 
                <div className="img-box">
                    <img src ="/images/img-1.png" className="img-1"/>
                
                </div>

                </div>

            </div>

        </div>
     
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classNameName="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        
    )
}


export default Courosel;
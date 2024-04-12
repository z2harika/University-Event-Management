import React from 'react'
import pic1 from '../pics/pic1.jpg'
import pic2 from '../pics/pic2.jpg'
import pic3 from '../pics/pic3.jpg'
import pic4 from '../pics/pic4.jpg'
export default function Carousel() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={pic1} className="d-block w-100" alt="..."style={{ maxHeight: '500px', objectFit: 'cover' }}/>
    </div>
    <div className="carousel-item">
    <img src={pic2} className="d-block w-100" alt="..."style={{ maxHeight: '500px', objectFit: 'cover' }}/>
    </div>
    <div className="carousel-item">
    <img src={pic3} className="d-block w-100" alt="..."style={{ maxHeight: '500px', objectFit: 'cover' }}/>
    
    </div>
    <div className="carousel-item">
    <img src={pic4} className="d-block w-100" alt="..."style={{ maxHeight: '500px', objectFit: 'cover' }}/>
    
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only"></span>
  </a>
</div>
    </>
  )
}

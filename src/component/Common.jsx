import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = ({name, visit, imgsrc, btnname}) => {
  return (
    <div>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className=''>{name}<strong className='brand-name text-primary'> MunaTechnical</strong></h1>
                  <h2 className='my-3'>We are the team of talented developer making websites</h2>

                  <div className="mt-3">
                  <NavLink to={visit} className='btn-get-started'>{btnname}</NavLink>
                </div>
                </div>
                
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={imgsrc} alt="home img" className='img-fluid animated' />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Common


{/* <div className='container-fluid nav_bg'>
<div className="row">
  <div className="col-10 mx-auto">
    
  </div>
</div>

</div> */}

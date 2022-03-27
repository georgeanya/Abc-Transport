import React from 'react'
import lady from '../../images/lady.jpg'
import icon from '../../images/icon.png'


const Explore2 = () => {
  return (
    <div className="overflow-hidden">
        <div className="row g-5">
            <div className="col-sm-6 order-last order-sm-first">
                <img src={lady} alt="abctransport lady experience" width="100%"/>
            </div>
            <div className="col-sm-6 order-first order-sm-first d-flex align-items-center">
                <div className="text-left pr-3 px-4 px-sm-0 mr-sm-5">
                    <h5>Comfortable travel experience</h5>
                    <p style={{fontSize: 'smaller'}}>It is a long establish fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
                    'Content here,content here', making it look like readable English. Many desktop publishing packages</p>
                    <div className="row my-4">
                        <div className="col-6">
                            <div className="d-flex">
                            <img src={icon} alt="bullet" width={'15px'} height={'15px'} />
                                <p className="px-2 lh-1 fw-bold">Charging point</p>
                            </div>
                            <div className="d-flex">
                                <img src={icon} alt="bullet" width={'15px'} height={'15px'} />
                                <p className="px-2 lh-1 fw-bold">Emergency exit</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <img src={icon} alt="bullet" width={'15px'} height={'15px'} />
                                <p className="px-2 lh-1 fw-bold">Safety concious</p>
                            </div>
                            <div className="d-flex">
                                <img src={icon} alt="bullet" width={'15px'} height={'15px'} />
                                <p className="px-2 lh-1 fw-bold">More legroom</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex">
                                <img src={icon} alt="bullet" width={'15px'} height={'15px'}/>
                                <p className="px-2 lh-1 fw-bold">Fire extinguisher</p>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-md-lg btn-sm-md btn-outline-success me-2 rounded-0" href="/about">LEARN MORE</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore2

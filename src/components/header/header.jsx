import React from 'react'
import './header.css'
import abc from '../../images/abc.png'

const Header = () => {
  return (
    <div className='header px-5'>
        <div className="navbar navbar-expand-lg navbar-light  ">
            <img className=" navbar-brand" src={abc} alt='abc' id='top' width='100px'/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link navbar_link_item pe-xl-3 pe-fs-xl-5 text-white" href="#home">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link navbar_link_item pe-xl-3 fs-xl-5 text-white" href="#about">Manage Booking</a>
                </li>
                <li className="nav-item">
                <a className="nav-link navbar_link_item pe-xl-3 fs-xl-5 text-white" href="#menu">Explore</a>
                </li>
                <li className="nav-item">
                <a className="nav-link navbar_link_item pe-xl-3 fs-xl-5 text-white" href="#contact">Cargo</a>
                </li>
                <li className="nav-item">
                <a className="nav-link navbar_link_item pe-xl-5 fs-xl-5 text-white" href="#contact">Hotel</a>
                </li>
            </ul>
            <button type="button" class="btn btn-lg btn-outline-light me-2 rounded-0">LOGIN</button>
            <button type='button' className='btn btn-lg btn-success rounded-0 btn_color'>SIGN UP</button>
            </div>
        </div>
        <div className='header_text text-white'>
            <h1 className='d-flex justify-content-start heading'>Let us take you there</h1>
            <p className='d-flex justify-content-start paragraph'>Pleasure or business, we will take you anywhere within West Africa in comfort and safety</p>
            <button type='button' className='btn btn-md-lg btn-sm-md btn-success rounded-0 btn_color'>BOOK NOW</button>
        </div>
    </div>
  )
}

export default Header

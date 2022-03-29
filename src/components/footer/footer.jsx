import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className="bg-dark py-5 overflow-hidden" style= {{width: '100%'}}>
        <footer className="page-footer font-small mdb-color pt-4">
            <div className="container text-center text-white text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3 ">
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 footer_heading__1dUX7">Quick links</h6>
                        <p><a href="..." className="text-white text-decoration-none">Careers</a></p>
                        <p><a href="..." className="text-white text-decoration-none">Testimonials</a></p>
                        <p><a href="..." className="text-white text-decoration-none">Privacy policy</a></p>
                        <p><a href="..." className="text-white text-decoration-none">Terms &amp; Conditions</a></p>
                        <p><a href="..." className="text-white text-decoration-none">sign in</a></p>
                    </div><hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 footer_heading__1dUX7">Our products</h6>
                        <p><a href="#!" className="text-white text-decoration-none">Transit inn</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Cargo express</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Sprinter service</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Coach West Africa</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Loyalty card</a></p>
                    </div><hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 footer_heading__1dUX7">Help</h6>
                        <p><a href="#!" className="text-white text-decoration-none">Contact us</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">FAQs</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Feedback</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Coach West Africa</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Confirm phone booking</a></p>
                    </div><hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="mb-4 footer_heading">Others</h6>
                        <p><a href="#!" className="text-white text-decoration-none">Agent registration</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Agent login</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Schedules</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">About us</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Gallery</a></p>
                    </div><hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-12 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="mb-4 text-white">Contact</h6>
                        <p className="text-white"><i className="fas fa-home"></i>George Anya</p>
                        <p className="text-white"><i className="fas fa-envelope"></i> georgeanya4real@gmail.com</p>
                        <p><a className="text-white text-decoration-none" href='tel:+234-907-519-7519'>+234 907 519 7519</a></p>
                        <p><a className="text-white text-decoration-none" href='tel:+234-806--910-9229'>+234 806 910 9229</a></p>
                    </div>
                </div><hr className="bg-white"/>
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left text-white text-decoration-none">© 2021 Copyright:<a href="https://www.abctransport.com/" className="text-white text-center text-decoration-none"><strong className="text-white"> ABC Transport</strong>. All rights reserved</a></p>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="..." className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="..." className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="..." className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fab fa-google-plus-g"></i></a></li>
                                <li className="list-inline-item"><a href="..." className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer

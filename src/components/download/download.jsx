import React from 'react';
import abc from '../../images/abc-app.png';

const Download = () => {
  return (
    <div className="jumbotron_root__2y-Lx">
        <div className="jumbotron_jumbotron__32No0 jumbotron rounded jumbotron-fluid">
            <div className="container px-md-5 px-sm-2  jumbotron_jumbotronContent__O-INk">
                <p className="jumbotron_head__1KOYY lead">Download the ABC app for easy booking</p>
                <p className="jumbotron_body__-bDal">Conveniently manage your bookings, tickets, plan all your trips and enjoy discounts. ABC Transport App will help you buy tickets more easily</p>
                <img src="/static/media/google-play.cf81659e.png" alt="Get it on Google" width="120px" className="jumbotron_store__3-l79 jumbotron_storeGoogle__1uYFX"/>
                <img src="/static/media/app-store.85701b32.png" alt="Download on apple" width="200px" className="jumbotron_store__3-l79"/>
            </div>
        </div>
        <div className="jumbotron_mobileApp__4dqtO">
            <img src={abc} alt="ABC mobile app" height="500px"/>
        </div>
        <div  style={{height: '200px'}}>
        </div>
    </div>
  )
}

export default Download

import React from 'react'
import './explore.css'
import award from '../../images/award.png'
import discount from '../../images/discount.png'
import id from '../../images/id-card.png'

const Explore = () => {
  return (
    <div className="px-2 mx-sm-5 mx-3 " style={{marginTop: '18vh'}}>
        <div className="row mb-4">
            <div className="col-4 col-lg-2">
                <h5 className="text-nowrap">Our advantages</h5>
            </div>
            <div className="col-lg-10 col-8">
                <hr/>
            </div>
        </div>
        <div className="my-3 mb-5">
            <div className="row g-3">
                <div className="col-md-4">
                    <div className="card card-body border-white h-100" style={{boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px'}}>
                        <div className="row text-center g-3">
                            <div className="col-sm-3">
                                <img src={discount} alt="discount sticker" width="40"/>
                            </div>
                            <div className="col-sm-9 text-sm-left">
                                <p className="h5" style={{fontWeight: 'bold'}}>Kids' discount</p>
                                <p>Kids below the age of 12 and students within West Africa region get a rebate for every ticket, even Youth Corpers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-body border-white h-100" style={{boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px'}}>
                        <div className="row text-center g-3"><div className="col-sm-3">
                            <img src={award} alt="award" width="40"/>
                        </div>
                        <div className="col-sm-9 text-sm-left">
                            <p className="h5" style={{fontWeight: 'bold'}}>Best industry award</p>
                            <p>2015-CITL Pioneer Luxury Bus Operator on the international (West Coach, Africa)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card card-body border-white h-100" style={{boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px'}}>
                    <div className="row text-center g-3">
                        <div className="col-sm-3">
                            <img src={id} alt="discount sticker" width="40"/>
                        </div>
                        <div className="col-sm-9 text-sm-left">
                            <p className="h5" style={{fontWeight: 'bold'}}>Loyalty cards</p>
                            <p>Complete Ten trips in a year and get your Eleventh trip free. You will also automaticallty become a Gold customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Explore

import React from 'react'
import './booking.css'

const Booking = () => {
  return (
    <div className=''>
      <div className="border shadow bg-white py-4 booking">
          <form className="form-group card-form text-center px-5">
              <h5 className="mt-2 mb-4 text-start">Choose your destination</h5>
              <div className="row"><div className="col-sm-6 mb-3">
                  <p className="my-1 text-muted text-start fs-xl-5 fs-sm-6">Origin</p>
                  <select className="form-control  px-3 text-muted">
                      <option>Departure Terminal</option>
                      <option>Abuja</option>
                      <option>Anambra</option>
                      <option>Delta</option>
                      <option>Lagos</option>
                    </select>
                </div>
                <div className="col-sm-6 mb-3">
                    <p className="my-1 text-muted text-start fs-xl-5 fs-sm-6">Destination</p>
                    <select className="form-control  px-3 text-muted">
                        <option>Arrival Terminal</option>
                        <option>Abuja</option>
                        <option>Anambra</option>
                        <option>Delta</option>
                        <option>Lagos</option>
                    </select>
                </div>
                <div className="col-md-4 col-6 mb-3">
                    <p className='text-start text-muted fs-xl-5 fs-sm-6'>Departure date</p>
                    <input type="date" className="form-control text-muted"/>
                </div>
                <div className="col-md-4 col-6 mb-3">
                    <p className='text-start text-muted fs-xl-5 fs-sm-6'>Arrival date</p>
                    <input type="date" className="form-control text-muted"/>
                </div>
                <div className="col-md-4 col-sm-12 mb-3">
                    <p className='text-start text-muted fs-xl-5 fs-sm-6'>Passengers</p>
                    <select className="form-control text-muted">
                        <option>Passengers</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
              </div>
                <button className="col-12 my-3 btn btn-block btn-red btn-lg rounded-0">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Booking

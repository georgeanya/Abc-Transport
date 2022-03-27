import React from 'react'
import calabar from '../../images/state/Calabar.jpg'
import enugu from '../../images/state/ENUGU.jpg'
import lagos from '../../images/state/lagos.jpg'
import owerri from '../../images/state/owerri.jpg'
import pH from '../../images/state/pH.jpg'
import abuja from '../../images/state/abuja.jpg'
import './quickBook.css'

const QuickBook = () => {
  return (
    <div className='mx-xl-5'>
        
      <div className="px-2 mx-sm-5 mx-3">
          <div className="row mb-4">
              <div className="col-3 col-lg-2">
                  <h5 className="text-nowrap ">Quick Book</h5>
                </div>
                <div className="col-lg-10 col-9">
                    <hr/>
                </div>
            </div>
            <div className="row g-2">
                <div className="col-sm-4 book_text">                    
                    <img src={calabar} className="w-100 h-100 mb-2" alt="calabar"/>
                    <h1>Calabar</h1>
                    <p>From Yaba Lagos</p>
                    <button type='button' className='btn btn-md btn-success rounded-0 btn_color'>BOOK NOW</button>
                </div>
                <div className="col-sm-4 book_text">                    
                    <img src={enugu} className="w-100 h-100 mb-2" alt="enugu"/>
                    <h1>Enugu</h1>
                    <p>From Jibowu Lagos</p>
                    <button type='button' className='btn btn-md btn-success rounded-0 btn_color'>BOOK NOW</button>
                </div>
                <div className="col-sm-4 book_text">                  
                    <img src={lagos} className="w-100 h-100 mb-2" alt="lagos"/>
                    <h1>Lagos</h1>
                    <p>From Abuja</p>
                    <button type='button' className='btn btn-md btn-success rounded-0 btn_color'>BOOK NOW</button>
                </div>
                <div className="col-sm-4 book_text">
                    <img src={owerri} className="w-100 h-100 mb-2" alt="owerri"/>
                    <h1>Owerri</h1>
                    <p>From Mazamaza</p>
                    <button type='button' className='btn btn-md btn-success rounded-0 btn_color'>BOOK NOW</button>
                </div>
                <div className="col-sm-4 book_text">                    
                    <img src={pH} className="w-100 h-100 mb-2" alt="pH"/>
                    <h1>Portharcouth</h1>
                    <p>From Lagos</p>
                    <button type='button' className='btn btn-md btn-success rounded-0 btn_color'>BOOK NOW</button>
                </div>
                <div className="col-sm-4 book_text">                   
                    <img src={abuja} className="w-100 h-100 mb-2" alt="abuja"/>
                    <h1>Abuja</h1>
                    <p>From Edo</p>
                    <button type='button' className='btn btn-md btn-success rounded-0 btn_color'>BOOK NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuickBook

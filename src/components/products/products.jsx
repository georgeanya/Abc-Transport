import React from 'react'
import './products.css'
import sprinter from '../../images/sprinter-logo.png'
import transit from '../../images/service-2.jpg'
import westAfrica from '../../images/service-3.jpg'
import cargo from '../../images/cargo-log.png'


const Products = () => {
  return (
    <div className='d-flex flex-xl-row flex-sm-column justify-content-center py-5 my-5'>
      <img alt='sprinter' src={sprinter}/>
      <img alt='transit' src={transit}/>
      <img alt='westAfrica' src={westAfrica}/>
      <img alt='cargo' src={cargo}/>
    </div>
  )
}

export default Products

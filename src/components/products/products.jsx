import React from 'react'
import './products.css'
import sprinter from '../../images/sprinter-logo.png'
import transit from '../../images/service-2.jpg'
import westAfrica from '../../images/service-3.jpg'
import cargo from '../../images/cargo-log.png'


const Products = () => {
  return (
    <div className='d-flex flex-xl-row flex-sm-column justify-content-center py-5 my-5 product'>
      <img alt='sprinter' src={sprinter} className='product_image'/>
      <img alt='transit' src={transit} className='product_image'/>
      <img alt='westAfrica' src={westAfrica} className='product_image'/>
      <img alt='cargo' src={cargo} className='product_image'/>
    </div>
  )
}

export default Products

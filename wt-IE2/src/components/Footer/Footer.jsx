import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer__container'>
        <div className='footer__container__left'>
          <img src={assets.app_store} alt='logo' />
          <h2>Footer</h2>
        </div>
        <div className='footer__container__right'>
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
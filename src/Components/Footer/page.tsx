import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='bg-yellow-200 h-[200px] w-full text-center mt-20 pt-16 text-1xl md:text-2xl lg:text-3xl  '>
        <p>�� 2020 My Website. All rights reserved.</p>
        <div className='flex justify-center items-center pt-5'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FaFacebook className='h-8 w-8' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className='h-8 w-8 ml-4' />
          </a>
          <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='h-8 w-8 ml-4' />
          </a>
          <a href='https://www.linkdn.com/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='h-8 w-8 ml-4' />
          </a>
        </div>
  

    </div>
    </div>
  )
}

export default Footer

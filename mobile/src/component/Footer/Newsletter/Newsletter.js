import React from 'react'
import './Newsletter.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
export default function Newsletter() {
  return (
    <div className='contain'>
      <div className='content'>
        <span className='small-text'>News Letter</span>
        <span className='big-text'>Sing up for latest update and offer</span>
        <div className='form'>
            <input type="text" />
            <button type='sumbit'>Submit</button>
        </div>
        <div className='text1'>will be use in according with our privacy</div>
        <div className='social'>
            <div className='icon'>
                <FaFacebookF size={14}/>
            </div>
            <div className='icon'>
                <FaTwitter size={14}/>
            </div>
            <div className='icon'>
                <FaInstagram size={14}/>
            </div>
            <div className='icon'>
                <FaLinkedinIn size={14}/>
            </div>
        </div>
      </div>
    </div>
  )
}

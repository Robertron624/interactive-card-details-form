import React from 'react'
import './index.css'

const Sucess = () => {
  return (
    <div className='success-container'>
        <img src="icon-complete.svg" alt="complete icon" />
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
        <button>Continue</button>
    </div>
  )
}

export default Sucess
import React, { useState } from 'react'
import "./index.css"

const Form = () => {

const [cardInfo, setCardInfo] = useState({})

    function formSubmit(e){

    }

  return (
    <div className='form-container'>
        <form action="">
            <label htmlFor="cardholder-name">
                CARDHOLDER NAME
                <input type="text" name='cardholder-name' placeholder='e.g. Jane Appleseed'/>
            </label>
            <label htmlFor="card-number">
                CARD NUMBER
                <input type="text" placeholder='e.g. 1234 5678 9123 0000' name='card-number'/>
            </label>
            <div className='card-additional-info'>
                <label htmlFor="exp-date">
                    EXP. DATE (MM/YY)
                    <input type="number" placeholder='MM' name="month" id="month" />
                    <input type="number" placeholder='YY' name="month" id="year" />
                </label>
                <label htmlFor="CVC">
                    <input type="number" placeholder='e.g. 123' name="cvc" id="cvc" />
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
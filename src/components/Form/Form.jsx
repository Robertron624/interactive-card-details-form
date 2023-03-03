import React from 'react'
import "./index.css"

const Form = () => {

    function formSubmit(e){

    }

  return (
    <div>
        <form action="">
            <label htmlFor="cardholder-name">
                CARDHOLDER NAME
                <input type="text" name='cardholder-name' placeholder='e.g. Jane Appleseed'/>
            </label>
            <label htmlFor="card-number">
                CARD NUMBER
                <input type="text" name='card-number'/>
            </label>
            <fieldset className='card-additional-info'>
                <label htmlFor="exp-date">
                    EXP. DATE (MM/YY)
                    <input type="number" name="month" id="month" />
                    <input type="number" name="month" id="year" />
                </label>
                <label htmlFor="exp-date">
                    <input type="number" name="month" id="month" />
                    <input type="number" name="month" id="year" />
                </label>
            </fieldset>

        </form>
    </div>
  )
}

export default Form
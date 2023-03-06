import React, { useState } from "react";
import "./index.css";

const Form = ({cardInfo, setCardInfo}) => {

    const { cardNumber, cardholderName, expMonth, expYear, cvc } = cardInfo;

    function formSubmit(e) {
        e.preventDefault();
    }

    const handleChange = (e) => {

        let inputName = e.target.name

        let inputValue = e.target.value

        // Adds a white space every 4 characters
        if(inputName == 'cardNumber'){
            inputValue = inputValue.match(/.{1,4}/g);
            inputValue = inputValue?.join(' ')
        }

        setCardInfo({
            ...cardInfo,
            [inputName]: inputValue
        })
    }

    return (
        <div className="form-container">
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="cardholderName">
                    CARDHOLDER NAME
                    <input
                        type="text"
                        name="cardholderName"
                        placeholder="e.g. Jane Appleseed"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="cardNumber">
                    CARD NUMBER
                    <input
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        name="cardNumber"
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="card-additional-info">
                    <div className="exp-date-inputs flex">
                        <label htmlFor="exp-date">EXP. DATE (MM:YY)</label>
                        <div className="inputs flex">
                            <input
                                type="number"
                                placeholder="MM"
                                name="expMonth"
                                id="month"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="number"
                                placeholder="YY"
                                name="expYear"
                                id="year"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="exp-iputs">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="number"
                            placeholder="e.g. 123"
                            name="cvc"
                            id="cvc"
                            maxLength={3}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

export default Form;

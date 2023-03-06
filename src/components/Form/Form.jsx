import React, { useState } from "react";
import "./index.css";

const Form = ({cardInfo, setCardInfo}) => {

    const { cardNumber, cardholderName, expMonth, expYear, cvc } = cardInfo;

    function formSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="form-container">
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="cardholder-name">
                    CARDHOLDER NAME
                    <input
                        type="text"
                        name="cardholder-name"
                        placeholder="e.g. Jane Appleseed"
                        required
                    />
                </label>
                <label htmlFor="card-number">
                    CARD NUMBER
                    <input
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        name="card-number"
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
                                name="month"
                                id="month"
                                required
                            />
                            <input
                                type="number"
                                placeholder="YY"
                                name="month"
                                id="year"
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

import React, { useState } from "react";
import "./index.css";

const Form = ({ cardInfo, setCardInfo, setFormSubmitted }) => {
    const { cardNumber, cardholderName, expMonth, expYear, cvc } = cardInfo;
    const [cardNumberError, setCardNumberError] = useState("");
    const [cvcError, setCvcError] = useState("");
    const [expDateError, setExpDateError] = useState("");
    const [cardholderNameError, setCardHolderNameError] = useState("");
    const [isMonthBlankError, setIsMonthBlankError] = useState(false);
    const [isYearBlankError, setIsYearBlankError] = useState(false);

    const MAX_CVC = 3;
    const MAX_EXPIRE_DATE = 2;
    const MAX_CARD_CHARACTERS = 19

    const BLANK_ERROR = "Can't be blank";

    function formSubmit(e) {
        e.preventDefault();

        const isCvcTooLong = cardInfo.cvc.length > MAX_CVC;
        const isMonthTooLong = cardInfo.expMonth.length > MAX_EXPIRE_DATE;
        const isYearTooLong = cardInfo.expYear.length > MAX_EXPIRE_DATE;
        const isCardNumberTooLoong = cardInfo.cardNumber.length > MAX_CARD_CHARACTERS

        let isCardNumberNaN = isNaN(cardNumber?.split(" ").join(""));

        if (!cardholderName) {
            setCardHolderNameError(BLANK_ERROR);
        }

        if (!cardNumber) {
            setCardNumberError(BLANK_ERROR);
        }

        if (isCardNumberNaN) {
            setCardNumberError("Wrong format, numbers only");
        }

        if (!expMonth || !expYear) {
            setExpDateError(BLANK_ERROR);

            if (!expMonth) {
                setIsMonthBlankError(true);
            }
            if (!expYear) {
                setIsYearBlankError(true);
            }
        }

        if (!cvc) {
            setCvcError(BLANK_ERROR);
        }

        if (isCvcTooLong) {
            setCvcError("CVC must be 3 characters long");
        }

        if (isMonthTooLong || isYearTooLong) {
            setExpDateError("Month and year must be at most 2 characters long");
        }

        if (
            cardholderName &&
            cardNumber &&
            expMonth &&
            expYear &&
            cvc &&
            !isCardNumberNaN &&
            !isCvcTooLong &&
            !isMonthTooLong &&
            !isYearTooLong &&
            !isCardNumberTooLoong
        ) {
            console.log("form -> ", cardInfo);
            setFormSubmitted(true);
        }
    }

    const handleChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        // Adds a white space every 4 characters
        if (inputName == "cardNumber") {
            inputValue = inputValue.match(/.{1,4}/g);
            inputValue = inputValue?.join(" ");

            if (inputValue?.length > 19) {
                setCardNumberError("Card numbers must be only 16 characters");
                return;
            } else {
                setCardNumberError("");
            }
        }

        setCardInfo({
            ...cardInfo,
            [inputName]: inputValue,
        });
    };

    return (
        <div className="form-container">
            <form action="POST" onSubmit={formSubmit}>
                <label htmlFor="cardholderName">
                    CARDHOLDER NAME
                    <input
                        id="cardholderName"
                        type="text"
                        name="cardholderName"
                        placeholder="e.g. Jane Appleseed"
                        onChange={handleChange}
                        className={`${
                            cardholderNameError ? "border-error" : ""
                        }`}
                    />
                    <span className="number-error">{cardholderNameError}</span>
                </label>
                <label htmlFor="cardNumber">
                    CARD NUMBER
                    <input
                        id="cardNumber"
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        name="cardNumber"
                        // value={cardNumber} Does not work with current implementation of blank space every 4 characters
                        onChange={handleChange}
                        className={`${cardNumberError ? "border-error" : ""}`}
                    />
                    <span className="number-error">{cardNumberError}</span>
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
                                className={`${
                                    isMonthBlankError ? "border-error" : ""
                                }`}
                            />
                            <input
                                type="number"
                                placeholder="YY"
                                name="expYear"
                                id="year"
                                onChange={handleChange}
                                className={`${
                                    isYearBlankError ? "border-error" : ""
                                }`}
                            />
                        </div>
                        <span className="number-error">{expDateError}</span>
                    </div>
                    <div className="cvc-inputs">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="number"
                            placeholder="e.g. 123"
                            name="cvc"
                            id="cvc"
                            onChange={handleChange}
                            className={`${cvcError ? "border-error" : ""}`}
                        />
                        <span className="number-error">{cvcError}</span>
                    </div>
                </div>
                <button type="submit">Confirm</button>
            </form>
        </div>
    );
};

export default Form;

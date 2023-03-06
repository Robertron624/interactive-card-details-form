import React from "react";
import "./index.css";

const Cards = ({ cardInfo }) => {
    const { cardNumber, cardholderName, expMonth, expYear, cvc } = cardInfo;

    return (
        <div className="cards-container">
            <div className="frontal-card">
                <img src="bg-card-front.png" alt="front of the card" />
                <div className="frontal-content">
                    <img className="card-logo" src="card-logo.svg" alt="card logo" />
                    <div className="card-numbers flex">
                        <span className="card-number">{cardNumber || '0000 0000 0000 0000'}</span>
                        <div className="card-name-cvc flex">
                            <span>{cardholderName || 'Jane Appleseed'}</span>
                            <span>{expMonth || '00'}/{expYear || '00'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back-card">
                <img src="bg-card-back.png" alt="back of the card" />
                <span>{cvc || '000'}</span>
            </div>
        </div>
    );
};

export default Cards;

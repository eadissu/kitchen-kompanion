import { useState } from 'react'
import './PopUps.css'
import AddButton from './../assets/AddButton.svg';
import SubButton from './../assets/SubtractButton.svg';

function SetQuantity() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="popUp">
      <div className="content">
        <p>Please set a quantity for this Ingredient.</p>
        <div className="editor">
          <div className="incrementor">
            <button className="decrement" onClick={() => setQuantity(q => Math.max(0, q - 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
              <path d="M0 1C0 0.734784 0.110625 0.480429 0.307538 0.292893C0.504451 0.105357 0.771523 0 1.05 0H12.95C13.2285 0 13.4955 0.105357 13.6925 0.292893C13.8894 0.480429 14 0.734784 14 1C14 1.26522 13.8894 1.51957 13.6925 1.70711C13.4955 1.89464 13.2285 2 12.95 2H1.05C0.771523 2 0.504451 1.89464 0.307538 1.70711C0.110625 1.51957 0 1.26522 0 1Z" fill="#4F6259"/>
              </svg>
            </button>
            <input type="text" value={quantity} readOnly className="quantity-input" />
            <button className="increment" onClick={() => setQuantity(q => q + 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M6 8H1C0.71667 8 0.479337 7.904 0.288004 7.712C0.0966702 7.52 0.000670115 7.28267 3.44827e-06 7C-0.000663218 6.71734 0.0953369 6.48 0.288004 6.288C0.48067 6.096 0.718003 6 1 6H6V1C6 0.71667 6.096 0.479337 6.288 0.288004C6.48 0.0966702 6.71734 0.000670115 7 3.44827e-06C7.28267 -0.000663218 7.52034 0.0953369 7.713 0.288004C7.90567 0.48067 8.00134 0.718003 8 1V6H13C13.2833 6 13.521 6.096 13.713 6.288C13.905 6.48 14.0007 6.71734 14 7C13.9993 7.28267 13.9033 7.52034 13.712 7.713C13.5207 7.90567 13.2833 8.00134 13 8H8V13C8 13.2833 7.904 13.521 7.712 13.713C7.52 13.905 7.28267 14.0007 7 14C6.71734 13.9993 6.48 13.9033 6.288 13.712C6.096 13.5207 6 13.2833 6 13V8Z" fill="#4F6259"/>
              </svg>
            </button>
          </div>
          <div className="dropDown">
            <select className="unit-selector">
              <option>Units</option>
              <option>Grams</option>
              <option>Liters</option>
            </select>
          </div>
        </div>
      </div>
      <div className="options">
        <button className="optionButton">Cancel</button>
        <button className="optionButton">Ok</button>
      </div>
    </div>
  );
}

export default SetQuantity;
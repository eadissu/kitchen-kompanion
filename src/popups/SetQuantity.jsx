import { useState } from 'react'
import './PopUps.css'

function SetQuantity() {
  return (
    <div className="popUp">
      <div className="content">
        <p>Please set a quantity for this Ingredient.</p>
        <div className="editor">
          <div className="incrementor"></div>
          <div className="dropDown">
            <button>units V</button>
          </div>
        </div>
      </div>
      <div className="options">
        <div className="optionButton">
          <button> Cancel </button>
        </div>
        <div className="optionButton">
          <button> Ok </button>
        </div>
      </div>
    </div>
  );
  
}

export default SetQuantity;
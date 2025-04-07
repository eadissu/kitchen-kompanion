import { useState } from 'react';
import '../popups/PopUps.css';

/* Icons */
import Add from '../icons/Add';
import Subtract from '../icons/Subtract';

/* Components */
import DefaultButton from '../components/DefaultButton';
import TextField from '../components/TextField';
import DropdownButton from '../components/DropDownButton';


function SetQuantityQualitative() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="pop-up">
      <div className="interactive-contents">
        <span>Please set a quantity for this Ingredient.</span>
        <div className="editable">
          <DropdownButton dropdownType={"quantity"} />
        </div>
      </div>
      <div className="options">
        <button className='option-button left'> Cancel </button>
        <button className='option-button right'> Ok </button>
      </div>
    </div>
  );
}

export default SetQuantityQualitative;

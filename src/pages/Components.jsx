/* For viewing all the components */
import { useState } from 'react'

/* Imported icons */
import DownArrow from '../icons/DownArrow';
import UpArrow from '../icons/UpArrow';
import RightArrow from '../icons/RightArrow';
import LeftArrow from '../icons/LeftArrow';

import EditIcon from '../icons/EditIcon';
import Add from '../icons/Add';
import Subtract from '../icons/Subtract';



/* Imported components */
import DefaultButton from '../components/DefaultButton';
import SetQuantityNumeric from '../popups/SetQuantityNumeric'
import DropdownButton from '../components/DropDownButton';
import TextField from '../components/TextField';
import Popup from '../popups/PopUp';
import SetQuantityQualitative from '../popups/SetQuantityQualitative';

function Components() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <div>
        <DefaultButton label="grey" variant="grey" onClick={handleClick} />
        <DefaultButton label="dark-green" variant="dark-green" onClick={handleClick} />
        <DefaultButton label="teal" variant="teal" onClick={handleClick} />
        <DefaultButton label="transparent" variant="transparent" onClick={handleClick} />
        <DefaultButton label="silver-teal" variant="silver-teal" onClick={handleClick} />
      </div>
      <div>
        <DefaultButton label="teal with icon" variant="teal" onClick={handleClick} iconPosition={"right"} icon={<Subtract />} />
      </div>
      <div>
        <DropdownButton dropdownType="quantity" />
        <DropdownButton dropdownType="unit" />
      </div>
      <div>
        <TextField type="text" />
        <TextField type="number" />
      </div>
      <div>
        <Popup children={<SetQuantityNumeric />} />
      </div>

    </div>

  );
}

export default Components;

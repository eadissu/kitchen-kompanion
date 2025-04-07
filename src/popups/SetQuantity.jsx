import { useState } from 'react';
import '../popups/PopUps.css';

/* Icons */
import Add from '../icons/Add';
import Subtract from '../icons/Subtract';

/* Components */
import DefaultButton from '../components/DefaultButton';
import TextField from '../components/TextField';
import DropdownButton from '../components/DropDownButton';

/* Pop Up Variants:
  qualitative-edit
  quantitative-edit
  name-edit
  information
*/

function SetQuantity() {
  const [quantity, setQuantity] = useState(0);

  // Handle the Add and Subtract button clicks
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));


  return (
    <div className="pop-up">
      <div className="interactive-contents">
        <span>Please set a quantity for this Ingredient</span>
        <div className="editable">
          <div className="input">
          <DefaultButton variant={"grey"} icon={<Subtract />} onClick={decrementQuantity} />
            <TextField type="number" value={quantity} onChange={(value) => setQuantity(Number(value))} />
            <DefaultButton variant={"grey"} icon={<Add />} onClick={incrementQuantity} />
          </div>

          <DropdownButton dropdownType={"unit"} />
        </div>
      </div>
      <div className="options">
        <button className='option-button left'> Cancel </button>
        <button className='option-button right'> Ok </button>
      </div>
    </div>
  );
}

export default SetQuantity;

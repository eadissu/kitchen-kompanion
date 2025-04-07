import { useState } from 'react'
import '../styling/Components.css'

/* Possible Variants: 
  grey
  dark-green
  teal
  transparent
  silver-teal

*/

function DefaultButton({ label, onClick, variant, icon, iconPosition = "right" }) {
  const variantClass = `button ${variant}`;
  const hasLabel = Boolean(label);

  return (
    <button className={`${variantClass} icon-${iconPosition}`} onClick={onClick}>
      {icon && <span className="button-icon">{icon}</span>}
      {hasLabel && <span className="button-label">{label}</span>}
    </button>
  );
}


export default DefaultButton;
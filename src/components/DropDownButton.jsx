import { useState, useRef, useEffect } from "react";
import "../styling/Components.css"; // your button styles
import DownArrow from "../icons/DownArrow";
import UpArrow from "../icons/UpArrow";
import DefaultButton from "./DefaultButton";

/* Drop Down Types: 
  unit
  quantity
*/

function DropdownButton({iconPosition = "right", dropdownType, onSelect }) {
  const isUnitDropdown = dropdownType === "unit";
  const OPTIONS = isUnitDropdown
  ? ["units", "grams", "ounces", "cups", "tablespoons"]
  : ["High", "Medium", "Low", "Unspecified"];

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const [selected, setSelected] = useState(isUnitDropdown ? "units" : "Unspecified");


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
    setOpen(false);
  };

  return (
    <div className="dropdown-button-wrapper" ref={dropdownRef}>
      <DefaultButton
        label={`${selected} ${isUnitDropdown ? "" : "Quantity"}`}
        variant={isUnitDropdown ? "grey" : selected.toLowerCase()}
        icon={open ? <UpArrow /> : <DownArrow />}
        iconPosition={iconPosition}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="dropdown-menu">
          {OPTIONS.map((option) => (
            <DefaultButton
              key={option}
              label={`${option} ${isUnitDropdown ? "" : "Quantity"}`}
              variant={isUnitDropdown ? "grey" : option.toLowerCase()}
              onClick={() => handleSelect(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;

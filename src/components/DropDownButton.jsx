import { useState, useRef, useEffect } from "react";
import "../styling/Components.css"; // your button styles
import DownArrow from "../icons/DownArrow";
import UpArrow from "../icons/UpArrow";
import DefaultButton from "./DefaultButton";

/* Drop Down Types: 
  unit
  quantity
  sorting
*/

function DropdownButton({iconPosition = "right", dropdownType, onSelect }) {
  const isUnitDropdown = dropdownType === "unit";
  const isSortingDropdown = dropdownType === "sorting";  // New variant for sorting
  const OPTIONS = isUnitDropdown
    ? ["units", "grams", "ounces", "cups", "tablespoons"]
    : isSortingDropdown
    ? ["A-Z", "Z-A", "Quantity Ascending", "Quantity Descending"]
    : ["High", "Medium", "Low", "Unspecified"];

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const [selected, setSelected] = useState(isUnitDropdown ? "units" : isSortingDropdown ? "A-Z" : "Unspecified");

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
    onSelect?.(option);  // Call the onSelect callback
    setOpen(false);
  };

  return (
    <div className="dropdown-button-wrapper" ref={dropdownRef}>
      <DefaultButton
        label={`${selected} ${isUnitDropdown ? "" : isSortingDropdown ? "Sort by" : "Quantity"}`}
        variant={isUnitDropdown ? "grey" : isSortingDropdown ? "sort" : selected.toLowerCase()}
        icon={open ? <UpArrow /> : <DownArrow />}
        iconPosition={iconPosition}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="dropdown-menu">
          {OPTIONS.map((option) => (
            <DefaultButton
              key={option}
              label={`${option} ${isUnitDropdown ? "" : isSortingDropdown ? "Sort by" : "Quantity"}`}
              variant={isUnitDropdown ? "grey" : isSortingDropdown ? "sort" : option.toLowerCase()}
              onClick={() => handleSelect(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;

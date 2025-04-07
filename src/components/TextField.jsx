import { useState } from "react";
import "../styling/Components.css";

function TextField({ type = "text", value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (type === "number") {
      const numericValue = Number(newValue);
      // Only update if it's a valid number
      if (!isNaN(numericValue)) {
        onChange?.(newValue);
      }
    } else {
      onChange?.(newValue);
    }
  };

  return (
    <input
      className="text-field"
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}


export default TextField;
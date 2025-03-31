import { useState } from "react";

const usePantry = (initialPantry) => {
  const [pantry, setPantry] = useState(initialPantry);

  // Function to update or add an item in the pantry
  const updatePantryItem = (itemId, quantity, storage) => {
    setPantry((prevPantry) => ({
      ...prevPantry,
      [itemId]: { quantity, storage },
    }));
  };

  // Function to remove an item from the pantry
  const removePantryItem = (itemId) => {
    setPantry((prevPantry) => {
      const newPantry = { ...prevPantry };
      delete newPantry[itemId];
      return newPantry;
    });
  };

  // Function to update the quantity of an item
  const updatePantryQuantity = (itemId, newQuantity) => {
    setPantry((prevPantry) => ({
      ...prevPantry,
      [itemId]: { ...prevPantry[itemId], quantity: newQuantity },
    }));
  };

  // Function to change the storage location of an item
  const changeStorageLocation = (itemId, newStorage) => {
    setPantry((prevPantry) => ({
      ...prevPantry,
      [itemId]: { ...prevPantry[itemId], storage: newStorage },
    }));
  };

  return {
    pantry,
    updatePantryItem,
    removePantryItem,
    updatePantryQuantity,
    changeStorageLocation,
  };
};

export default usePantry;
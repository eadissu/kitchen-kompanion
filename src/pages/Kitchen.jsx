import { useState, useEffect } from 'react';
import users from '../data/users.json';
import Ingredient from '../components/Ingredient';
import '../styling/Pantry.css';
import SearchBar from '../components/SearchBar';
import DefaultButton from '../components/DefaultButton';
import DropDownButton from '../components/DropDownButton';

import categories from '../data/categories.json';

function Kitchen() {
  // Hardcoding to the first user
  const currentUser = users[0];
  const pantryItems = Object.keys(currentUser.pantry);

  // Initialize the selected filters to include all categories and pantry storage types
  const allCategories = categories.food_categories;
  const [selectedFilters, setSelectedFilters] = useState([...allCategories, "Pantry", "Fridge", "Freezer"]);

  // Function to toggle the filter on or off
  const handleFilterToggle = (category) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((filter) => filter !== category); // Remove filter
      } else {
        return [...prevFilters, category]; // Add filter
      }
    });
  };

  // Function to filter pantry items by selected categories
  const filteredPantryItems = pantryItems.filter((id) => {
    const ingredient = currentUser.pantry[id];
    // If no filters are selected, show all items
    if (selectedFilters.length === 0) {
      return true;
    }
    // Otherwise, check if the ingredient's category matches any selected filter
    return selectedFilters.some((filter) => ingredient.category === filter);
  });

  return (
    <div className="pantry">
      <div className='pantry-container'>
        <div className="search-function">
          <SearchBar />

          <div className="filters">
            <div className="row1">
              <div className="storage-filters">
                {/* Pantry, Fridge, and Freezer buttons are now also part of selected filters */}
                <DefaultButton
                  label="Pantry"
                  variant={selectedFilters.includes("Pantry") ? "teal" : "grey"}
                  onClick={() => handleFilterToggle("Pantry")}
                />
                <DefaultButton
                  label="Fridge"
                  variant={selectedFilters.includes("Fridge") ? "teal" : "grey"}
                  onClick={() => handleFilterToggle("Fridge")}
                />
                <DefaultButton
                  label="Freezer"
                  variant={selectedFilters.includes("Freezer") ? "teal" : "grey"}
                  onClick={() => handleFilterToggle("Freezer")}
                />
              </div>
              <div className="sortby-button">
                <div>
                  <span>Sort by:</span>
                  <DropDownButton dropdownType="sorting" iconPosition="right" />
                </div>
              </div>
            </div>

            <div className="row2">
              {/* Generate a filter button for each category */}
              {categories.food_categories.map((category) => (
                <DefaultButton
                  key={category}
                  label={category}
                  variant={selectedFilters.includes(category) ? "dark-green" : "grey"} // Highlight selected filters
                  onClick={() => handleFilterToggle(category)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="ingredients">
          {filteredPantryItems.length > 0 ? (
            filteredPantryItems.map((id) => (
              <Ingredient key={id} id={parseInt(id)} />
            ))
          ) : (
            <p>Your pantry is empty or no ingredients match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Kitchen;

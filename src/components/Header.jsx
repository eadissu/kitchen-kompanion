import { usState } from 'react';
import '../styling/Header.css'

function Header({pageName}) {
  // Create a mapping for pageName to actual names
  const pageNamesMap = {
    '/kitchen': 'Pantry',
    '/shoppinglist': 'Shopping List',
    '/recipes': 'Search Recipes',
    '/profile': 'Profile Page'
    // Add more page mappings as needed
  };

  // Get the display name based on the pageName
  const displayName = pageNamesMap[pageName] || 'Page Not Found'; // Default fallback if no match


  return (
    <div className= "header">
      <h1>K</h1>
      <h2>{displayName}</h2>
    </div>
  );
}

export default Header;
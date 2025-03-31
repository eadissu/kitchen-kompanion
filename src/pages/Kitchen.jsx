import { useState } from 'react';
import users from '../data/users.json';
import Ingredient from '../components/Ingredient';
import '../styling/Pantry.css';


// for now, this is just a list of the user's ingredient's in their pantry. it's also hard coded to one user (the first one)

function Kitchen() {
  // Hardcoding to the first user
  const currentUser = users[0];

  // Extract pantry items (IDs) and convert to an array
  const pantryItems = Object.keys(currentUser.pantry);

  return (
    <div className="pantry">
      <h2>{currentUser.name}'s Pantry</h2>
      <div className="pantry-list">
        {pantryItems.length > 0 ? (
          pantryItems.map((id) => (
            <Ingredient key={id} id={parseInt(id)} />
          ))
        ) : (
          <p>Your pantry is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Kitchen;

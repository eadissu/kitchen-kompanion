import { useState, useEffect } from 'react';
import ingredients from '../data/ingredients.json';
import users from '../data/users.json';

// Importing Icons
import heart_icon_true from '../icons/heart_full.svg';
import heart_icon_false from '../icons/heart_not_full.svg';
import list_icon from '../icons/list.svg';
import pantry_icon from '../icons/pantry.svg';
import trash_icon from '../icons/trash.svg';

function Ingredient({ id }) {
  const [ingredient, setIngredient] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  // Hardcoding to the first user
  const currentUser = users[0];

  useEffect(() => {
    const foundIngredient = ingredients.find(item => item.id === id);
    setIngredient(foundIngredient);

    // Check if the ingredient is in the user's favorite_ingredients list
    if (currentUser.favorite_ingredients.some(fav => fav.id === id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [id]);

  // Function to toggle liked status
  const toggleLike = () => {
    setIsLiked(prev => !prev);

    // Update the user's favorite_ingredients list (in memory)
    if (isLiked) {
      currentUser.favorite_ingredients = currentUser.favorite_ingredients.filter(fav => fav.id !== id);
    } else {
      currentUser.favorite_ingredients.push({ id });
    }
  };

  if (!ingredient) return <p>Loading...</p>; // Handle missing ingredient

  return (
    <div className="block">
      <div className="ingredient">
        <div className="ingredient-info">
          <div className='image'>
            <img src="" alt={ingredient.name} />
          </div>
          <p>{ingredient.name}</p>
        </div>
        <div className="action">
          <div className='icon' onClick={toggleLike}>
            <img src={isLiked ? heart_icon_true : heart_icon_false} alt={isLiked ? 'Unlike Ingredient' : 'Like Ingredient'} />
          </div>
          <div className='icon'>
            <img src={pantry_icon} alt='Add to Pantry'/>
          </div>
          <div className='icon'>
            <img src={list_icon} alt='Add to Shopping List'/>
          </div>
          <div className='icon'>
            <img src={trash_icon} alt='Remove from Pantry/ List'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredient;

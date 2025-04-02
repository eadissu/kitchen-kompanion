import React, { useState } from 'react';
import './ShoppingList.css';

function ShoppingList() {
const [mode, setMode] = useState('home'); // home | new | saved
const [listName, setListName] = useState('');
const [items, setItems] = useState([]);
const [savedLists, setSavedLists] = useState(() => {
  const saved = localStorage.getItem('shoppingLists');
  return saved ? JSON.parse(saved) : {};
});

const [showForm, setShowForm] = useState(false);
const [newItem, setNewItem] = useState({ name: '', quantity: '', unit: 'pcs' });

const handleCreateNew = () => {
  setMode('new');
  setItems([]);
  setListName('');
};

const handleSaveList = () => {
  if (!listName) return;
  const updated = { ...savedLists, [listName]: items };
  setSavedLists(updated);
  localStorage.setItem('shoppingLists', JSON.stringify(updated));
  setMode('home');
};

const handleOpenSavedList = (name) => {
  setListName(name);
  setItems(savedLists[name]);
  setMode('new'); // Reuse the UI for viewing/editing
};

const handleDeleteSavedList = (nameToDelete) => {
  const updated = { ...savedLists };
  delete updated[nameToDelete];
  setSavedLists(updated);
  localStorage.setItem('shoppingLists', JSON.stringify(updated));
};


const handleAddItemClick = () => setShowForm(true);

const handleChange = (e) => {
  const { name, value } = e.target;
  setNewItem((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (newItem.name.trim() === '') return;
  setItems([...items, newItem]);
  setNewItem({ name: '', quantity: '', unit: 'pcs' });
  setShowForm(false);
};

const handleRemoveItem = (indexToRemove) => {
  setItems(items.filter((_, index) => index !== indexToRemove));
};

return (
  <div className="shopping-list-container">
    <h1>🛒 Shopping List</h1>

    {mode === 'home' && (
      <div className="mode-buttons">
        <button onClick={handleCreateNew}>+ New List</button>
        <button onClick={() => setMode('saved')}>📂 Saved Lists</button>
      </div>
    )}

    {mode === 'new' && (
      <>
        <input
          type="text"
          placeholder="List name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          className="list-name-input"
        />
        <button onClick={handleAddItemClick}>+ Add Item</button>
        {showForm && (
          <form onSubmit={handleSubmit} className="item-form">
            <input type="text" name="name" placeholder="Item name" value={newItem.name} onChange={handleChange} required />
            <input type="number" name="quantity" placeholder="Qty" value={newItem.quantity} onChange={handleChange} required />
            <select name="unit" value={newItem.unit} onChange={handleChange}>
              <option value="pcs">pcs</option>
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="cups">cups</option>
              <option value="liters">liters</option>
            </select>
            <button type="submit">Add</button>
          </form>
        )}
        <ul className="grocery-list">
          {items.map((item, index) => (
            <li key={index} className="grocery-item">
              {item.quantity} {item.unit} — {item.name}
              <button className="remove-btn" onClick={() => handleRemoveItem(index)}>🗑</button>
            </li>
          ))}
        </ul>
        <button onClick={handleSaveList} className="save-list-btn">💾 Save List</button>
      </>
    )}

    {mode === 'saved' && (
      <div className="saved-lists-view">
        <h3>📁 Your Saved Lists:</h3>
        {Object.keys(savedLists).map((name, i) => (
<li key={i} className="saved-list-item">
  <span>{name}</span>
  <div className="saved-list-actions">
    <button onClick={() => handleOpenSavedList(name)}>Open</button>
    <button onClick={() => handleDeleteSavedList(name)} className="delete-btn">🗑</button>
  </div>
</li>
))}
      </div>
    )}
  </div>
);
}

export default ShoppingList;

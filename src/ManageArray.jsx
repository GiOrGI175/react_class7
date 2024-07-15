import React, { useState } from 'react';

const ManageArray = () => {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, items.length + 1]);
  }

  return (
    <>
      <div>
        <h1>ManageArray</h1>
        <button onClick={addItem}>Add number</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ManageArray;

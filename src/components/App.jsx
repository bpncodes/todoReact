import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setList] = useState([]);

  function updateItem(event) {
    const writtenItem = event.target.value;
    setItem(writtenItem);
  }
  function updateList() {
    setList(prevValue => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateItem} value={item} type="text" />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

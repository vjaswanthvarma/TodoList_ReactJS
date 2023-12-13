import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  function addItem(text) {
    setItems([...items, text]);
  }
  function deleteItem(id) {
    var newItems = [];
    items.filter((item, index) => {
      if (index != id) {
        newItems.push(item);
      }
    });
    setItems(newItems);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ol>
          {items.map((todoItem, index) => (
            <ToDoItem id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;

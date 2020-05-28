import React from 'react';
import { get, post } from './api';
import './App.css';

function addItem() {

}

async function getItems() {
  const response = await get('http://backend:8080/tasks');
  console.log(response);
}

function App() {
  getItems()

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
      </header>
      <button>Add Item</button>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Task Description</th>
        </tr>
      </table>
    </div>
  );
}

export default App;

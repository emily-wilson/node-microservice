import React from 'react';
import './App.css';
import { default as fetch } from 'node-fetch';

const minikubeIP = '192.68.99.108';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {async () => {
            const response = await fetch(`http://${minikubeIP}`);
            console.log(response);
          }}
        </table>
      </header>
    </div>
  );
}

export default App;

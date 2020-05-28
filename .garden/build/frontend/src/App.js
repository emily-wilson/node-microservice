import React from 'react';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get, post } from './api';
import './App.css';

function App() {
  const [name, setName] = React.useState(null);
  const [descr, setDescr] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);

  async function getItems() {
    fetch('http://localhost:8080/api/tasks', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(res => res.json())
      .then(res => setTasks(res));
  }

  async function addItem() {
    const data = {
      name,
      descr
    }
    fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response)
        console.log(response.json())
      })
  }

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
      </header>
      <Button variant="container" color="default" onClick={() => setModalOpen(true)} disableElevation>Add Item</Button>
      <Modal
        open={modalOpen}
        className="modal"
        onClose={() => setModalOpen(false)}
        aria-labelledby="add-item-modal"
        aria-describedby="modal-for-add-to-todo-list"
      >
        <div className="modalContent">
          <h3>Add item to Todo list</h3>
          Name<input type="text" onChange={(e) => setName(e.target.value)}/>
          Description<input type="text" onChange={(e) => setDescr(e.target.value)}/>
          <Button variant="contained" color="primary" onClick={() => {
            addItem();
            setModalOpen(false);
          }} disableElevation>Add to todo list</Button>
        </div>
      </Modal>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {console.log(tasks)}
          {tasks.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.descr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

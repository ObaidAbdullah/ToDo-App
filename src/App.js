import { Button, TextField } from '@mui/material';
import {useEffect, useState} from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';







function App() {
  const [todos, setTodos] = useState([ ]);
  const [input, setInput] = useState ('');
  const [serial, setSerial] = useState (0);

  useEffect (() =>{
    db.collection('todos').orderBy('key', 'desc').onSnapshot(snapshot => {
      setTodos (snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  })

  const addTodos = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todo : input,
      key : serial,
    })

    setTodos([...todos, input]);
    setSerial(serial + 1)
    setInput('')

  }
  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo List !</h1>
        <form>
          <TextField size="small" value={input} onChange={e => setInput(e.target.value)} id="standard-basic" label ="Write a todo" variant="standard" />
          <Button type='submit' variant="contained" disabled={!input} onClick={addTodos}>Add ToDo</Button>
        </form>
      
      </div>
      

      <ul className='todo_inputs'>
        {todos.map(todo=> (

          <Todo todoObj = {todo}/>

        ))}
      </ul>
    </div>
  );
}

export default App;


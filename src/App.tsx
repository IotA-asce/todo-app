import React, { useEffect, useState } from 'react';

// @ts-check

type todoObject = {
  task: string
  assignedDate: Date
}

function App() {

  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState();

  return (
    <div className="App">
      
      <button >add item</button>
    </div>
  );
}

export default App;

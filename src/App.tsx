// @ts-check

import React, { useEffect, useState } from 'react';

const getCurrentDate = (): string => {

  const year = new Date().getFullYear().toString();
  const month = new Date().getMonth() < 10 ? "0" + new Date().getMonth().toString() : new Date().getMonth().toString();
  const day = new Date().getDay() < 10 ? "0" + new Date().getDay().toString() : new Date().getDay().toString();

  return year + "-" + month + "-" + day;
}

type TodoObject = {
  text: String
  date: Date | null
}

function App() {

  const [todoList, setTodoList] = useState<TodoObject[]>([]);
  const [todoText, setTodoText] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  useEffect(() => {
    console.log(startDate);
  }, [startDate])


  return (
    <div className="App">
      <input type="text" />
      <input defaultValue={getCurrentDate()} type="date" onChange={(event: any) => setStartDate(event.target.value)} />
      <button onClick={() => {
        const todo: TodoObject = {
          text: todoText,
          date: startDate
        };

        setTodoList(listItems => [...listItems, todo]);
        setTodoText("");
        setStartDate(null);
      }}>
        add
      </button>
      <div>
        { todoList.map(item => <div key={Math.random()}>{item.text}</div> ) }
      </div>
    </div>
  );
}

export default App;

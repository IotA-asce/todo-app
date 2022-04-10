// @ts-check

import React from 'react';
import Navbar from './components/navbar/PrimarySearchAppBar';
import './components/assets/style.css';
import TodoScreen from './components/todo-screen/TodoScreen';
// import TDscreen from './components/vanilla/TDscreen';

// Task:  Create a Todo app(SPA) with these features: 
// 1.   Task create, edit, delete 
// 2.   Task assigning and de-assigning (Use dummy users for that) 
// 3.   Task due date 
// 4.   Sort with the due date 
// Tech stack to use:  ReactJs, Typescript, MUI(UI framework), Redux, Formik (For 
// forms), yup(For validation), moment. 
// Discipline to follow:  Business logic should be separated from the UI logi

// const getCurrentDate = (): string => {

//   const year = new Date().getFullYear().toString();
//   const month = new Date().getMonth() < 10 ? "0" + new Date().getMonth().toString() : new Date().getMonth().toString();
//   const day = new Date().getDay() < 10 ? "0" + new Date().getDay().toString() : new Date().getDay().toString();

//   return year + "-" + month + "-" + day;
// }


function App() {

  // const [startDate, setStartDate] = useState<Date | null>(new Date());

  // useEffect(() => {
  //   console.log(startDate);
  //   setStartDate(new Date(getCurrentDate()));
  // }, [startDate])


  return (
    <div className="App">
      <Navbar />
      <TodoScreen />
    </div>
  );
}

export default App;

import Add from "./Component/Add"
import ToDoList from "./Component/ToDoList";

import {TodoarrayProvider } from "./Context/Context";
import { useState } from "react";

function App() {
  const [dataArray,setDataArray] = useState([]);
   

  return (
    <div className="w-full h-screen bg-slate-800 flex flex-col items-center pt-32">
      <h1 className="text-white text-3xl mb-10">Your ToDo</h1>
      <TodoarrayProvider value={{dataArray,setDataArray}}>
        <Add></Add>
        <ToDoList />
      </TodoarrayProvider>
    </div>
  )
}

export default App

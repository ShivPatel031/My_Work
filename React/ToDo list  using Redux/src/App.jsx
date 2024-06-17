import Add from "./Component/Add"
import ToDoList from "./Component/ToDoList";
import { Provider } from "react-redux";
import { store } from "./Store/store";


function App() {

  return (
    <div className="w-full h-screen bg-slate-800 flex flex-col items-center pt-32">
      <h1 className="text-white text-3xl mb-10">Your ToDo</h1>
      <Provider store={store}>
        <Add></Add>
        <ToDoList />
      </Provider>
    </div>
  )
}

export default App

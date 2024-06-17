import { useTodoArray } from "../Context/Context";
import ToDoItems from "./ToDoItems";



export default function ToDoList(){
    const {dataArray} = useTodoArray();

    return(
        <>
        {dataArray.map((val)=><ToDoItems key={val.id} val={val}/>)}
        </>
    )
}
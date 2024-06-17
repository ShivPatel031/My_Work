import { useSelector } from "react-redux";
import ToDoItems from "./ToDoItems";



export default function ToDoList(){
    const data = useSelector((state)=>state.data);
    
    return(
        <>
        {data.map((val)=><ToDoItems key={val.id} val={val}/>)}
        </>
    )
}
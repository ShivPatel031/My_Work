import { useDispatch } from "react-redux";
import { addInTodo } from "../DataAction/crateReducer";
import { useState } from "react";


export default function Add(){
    const [text,setText] = useState('');
    const dispacth = useDispatch();
    

    let changeText=(e)=>{
        setText(e.target.value);
    }

    let keyCheck=(e)=>{
        if (e.code == 'Enter'){
            addInDataArray();
        }
    }

    let addInDataArray = ()=>{
        dispacth(addInTodo(text))
        setText('');
    }
    return(
        <div className="flex">
            <input 
                type="text" 
                placeholder="Write Todo..."
                value={text}
                onChange={changeText}
                onKeyDown={keyCheck} 
                className=" text-white w-[500px] h-[40px] rounded-tl-lg rounded-bl-lg bg-white bg-opacity-20 px-3 outline-none"/>

            <button
                onClick={addInDataArray} 
                className="bg-green-500 w-[60px] h-[40px] rounded-tr-lg rounded-br-lg text-white">Add</button>
        </div>
    )
}
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Input from './Input.jsx'
import { useState } from 'react'
import Item from './Item.jsx';

function App() {

  let [items , setItems] = useState([]);
  let [todo,setTodo] = useState("");

  let addme = ()=>{

    todo ? setItems([...items,{content:todo,key:uuidv4()}]):null
  }

  let track =(event)=>{

    setTodo(event.target.value)
  };

  let deleteme = (key)=>{

    setItems(items.filter((item)=>item.key != key));
  }

  let updateme = (key)=>{

    setItems(items.map((item)=>{

      if ( item.key == key ){

        return {content:todo,key:item.key}
      }
      else{

        return item;
      }
    }));
    
  }

  return (

    <><div className='maincontainer'>
            <Input todo={todo} addme={addme} track={track}/>
      <hr/>

      {items.map((item)=>{
        return (
            <Item item={item} deleteme={deleteme} updateme={updateme}/>
        ); 
      }
      )}
      </div>
      
      
    </>
  )
}

export default App
